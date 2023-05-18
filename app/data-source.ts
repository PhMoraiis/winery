import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "database",
    port: 5432,
    username: "admin",
    password: "adminpassword",
    database: "test_winerydb",
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})
