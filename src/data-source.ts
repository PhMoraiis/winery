import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"

const PORT = process.env.TYPEORM_PORT ? parseInt(process.env.TYPEORM_PORT) : 5432

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/entities/*.{ts,js}`],
    migrations: [`${__dirname}/migrations/*.{ts,js}`],
    subscribers: [],
})
