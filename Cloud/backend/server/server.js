import express from "express";
import cors from "cors";
import { SERVER_PORT } from "./src/config/server.config.js";
import Router from "./src/routes/url.routes.js";

// create express app
const app = express();

app.use(express.json());

// setup cross origin resource sharing
app.use(cors());

// Enable cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
    next();
});

// Setup server port
const port = SERVER_PORT;

// Enable router
app.use(Router);

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
