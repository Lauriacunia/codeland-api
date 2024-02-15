import dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || "3000",
  DB_NAME: process.env.DB_NAME || "test",
  MONGO_USER: process.env.MONGO_USER || "",
  MONGO_PASS: process.env.MONGO_PASS || "",
  DATASOURCE: process.env.DATASOURCE || "MONGO",
  SECRET: process.env.SECRET || "",
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID || "",
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET || "",
  GITHUB_CALLBACK_URL: process.env.GITHUB_CALLBACK_URL || "",
  JWT_SECRET: process.env.JWT_SECRET || "",
};

export default CONFIG;
