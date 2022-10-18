import dotenv from "dotenv";

dotenv.config();

const RDS_HOST = process.env.RDS_HOST;

const RDS_USERNAME = process.env.RDS_USERNAME;

const RDS_PASSWORD = process.env.RDS_PASSWORD;

const DATABASE_NAME = process.env.DATABASE_NAME;

const SERVER_PORT = process.env.SERVER_PORT;

const BASE_URL = process.env.BASE_URL;

export {
    RDS_HOST,
    RDS_USERNAME,
    RDS_PASSWORD,
    DATABASE_NAME,
    SERVER_PORT,
    BASE_URL,
};
