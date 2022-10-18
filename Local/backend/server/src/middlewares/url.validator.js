import { body } from "express-validator";

const longUrlIsValid = () => {
    return [body("longUrl").isURL()];
};

export default {
    longUrlIsValid,
};
