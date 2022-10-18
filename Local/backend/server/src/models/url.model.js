import sequelize from "../loaders/db.loader.js";
import DataTypes from "sequelize";

const Url = sequelize.define("urls", {
    longUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shortUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    urlCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
    },
});

sequelize
    .sync()
    .then(() => {
        console.log("Url table created successfully!");
    })
    .catch((error) => {
        console.error("Unable to create Url table : ", error);
    });

export default Url;
