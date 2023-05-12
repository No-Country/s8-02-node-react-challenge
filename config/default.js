import dotenv from "dotenv";
dotenv.config()

export default {
    port: process.env.PORT,
    DB_URI: process.env.DB_URI,
    DB_NAME: process.env.DB_NAME,
};