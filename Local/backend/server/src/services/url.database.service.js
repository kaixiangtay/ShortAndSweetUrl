import UrlModel from "../models/url.model.js";
import { BASE_URL } from "../config/server.config.js";
import { nanoid } from "nanoid";

export default class UrlDatabaseService {
    async findAllUrls() {
        return await UrlModel.findAll();
    }

    async findUrlByUrlCode(urlCode) {
        return await UrlModel.findOne({
            where: { urlCode: urlCode },
        });
    }

    async findUrlByLongUrl(longUrl) {
        return await UrlModel.findOne({
            where: { longUrl: longUrl },
        });
    }

    async saveNewUrl(longUrl) {
        const urlCode = nanoid(6); // generate unique nano id of length 6

        const shortUrl = BASE_URL + "/" + urlCode;

        return await UrlModel.create(
            {
                longUrl: longUrl,
                shortUrl: shortUrl,
                urlCode: urlCode,
            },
            { fields: ["longUrl", "shortUrl", "urlCode"] }
        );
    }
}
