import { validationResult } from "express-validator";
import Messages from "../config/message.config.js";
import UrlDatabaseService from "../services/url.database.service.js";
import UrlResponseService from "../services/url.response.service.js";
import urlValidator from "../middlewares/url.validator.js";

const UrlDatabaseServiceInstance = new UrlDatabaseService();
const UrlResponseServiceInstance = new UrlResponseService();

// For code debugging purposes
export const getAllUrls = async (req, res) => {
    try {
        const urlList = await UrlDatabaseServiceInstance.findAllUrls();
        const emptyUrlDatabase = urlList.length === 0;

        if (emptyUrlDatabase) {
            return res
                .status(200)
                .send(
                    UrlResponseServiceInstance.sendError(
                        Messages.EMPTY_DATABASE
                    )
                );
        }
        return res
            .status(200)
            .send(
                UrlResponseServiceInstance.sendSuccess(
                    Messages.NON_EMPTY_DATABASE,
                    urlList
                )
            );
    } catch (err) {
        return res
            .status(400)
            .send(UrlResponseServiceInstance.sendBadRequest(err.toString()));
    }
};

export const shortenUrl = [
    urlValidator.longUrlIsValid(),
    async (req, res) => {
        try {
            const errors = validationResult(req).array();
            const isInvalidUrl = errors.length > 0;
            if (isInvalidUrl) {
                return res
                    .status(404)
                    .send(
                        UrlResponseServiceInstance.sendError(
                            Messages.INVALID_URL
                        )
                    );
            }

            const longUrl = req.body.longUrl;
            let url = await UrlDatabaseServiceInstance.findUrlByLongUrl(
                longUrl
            );

            if (url != null) {
                return res
                    .status(200)
                    .send(
                        UrlResponseServiceInstance.sendSuccess(
                            Messages.EXISTING_URL,
                            url.shortUrl
                        )
                    );
            } else {
                url = await UrlDatabaseServiceInstance.saveNewUrl(longUrl);
                return res
                    .status(200)
                    .send(
                        UrlResponseServiceInstance.sendSuccess(
                            Messages.NEW_URL,
                            url.shortUrl
                        )
                    );
            }
        } catch (err) {
            return res
                .status(400)
                .send(
                    UrlResponseServiceInstance.sendBadRequest(err.toString())
                );
        }
    },
];

export const getRedirectUrl = [
    async (req, res) => {
        try {
            const urlCode = req.params.shortUrl;
            const url = await UrlDatabaseServiceInstance.findUrlByUrlCode(
                urlCode
            );

            if (!url) {
                return res
                    .status(404)
                    .send(
                        UrlResponseServiceInstance.sendError(
                            Messages.NO_URL_FOUND
                        )
                    );
            }

            return res.redirect(url.longUrl);
        } catch (err) {
            return res
                .status(400)
                .send(
                    UrlResponseServiceInstance.sendBadRequest(err.toString())
                );
        }
    },
];
