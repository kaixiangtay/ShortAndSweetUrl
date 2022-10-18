import { Sequelize } from "sequelize";
import {
    RDS_HOST,
    RDS_USERNAME,
    RDS_PASSWORD,
    DATABASE_NAME,
} from "../config/server.config.js";

let sequelize = new Sequelize(DATABASE_NAME, RDS_USERNAME, RDS_PASSWORD, {
    host: RDS_HOST,
    dialect: "mysql",
});

// Check database connection
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((error) => {
        console.error("Unable to connect to the database: ", error);
    });

export default sequelize;
