import express from "express";
import {
    getAllUrls,
    shortenUrl,
    getRedirectUrl,
} from "../controllers/url.controller.js";

const router = express.Router();

// Loopback API to return AWS EC2 health
router.get("/health", (req, res) => {
    res.json({
        status: "API Its Working",
        message: "EC2 Instance is healthy",
    });
});

router.get("/api/url", (req, res) => {
    res.json({
        status: "API Its Working",
        message: "Test",
    });
});

// Retrieve all Urls
router.get("/api/url/all", getAllUrls);

// Shorten a new long url
router.post("/api/url/shorten", shortenUrl);

// Retrieve a redirect url with short url
router.get("/api/url/:shortUrl", getRedirectUrl);

export default router;
