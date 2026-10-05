import dotenv from "dotenv";

dotenv.config();

const config={
    port: process.env.PORT,
    mongoos_url: process.env.MONGODB_URL,
}

export default config;