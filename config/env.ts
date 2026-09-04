import dotenv from "dotenv";

dotenv.config();

export const ENV = {
    BASE_URL: process.env.BASE_URL || "",
    API_URL: process.env.API_URL || "",
    USERNAME: process.env.USERNAME || "",
    PASSWORD: process.env.PASSWORD || "",
    ENVIRONMENT: process.env.ENVIRONMENT || "qa"
};