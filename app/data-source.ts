import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "adminwinery",
    password: "adminpasswinery",
    database: "winery_crud",
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/entities/Vinicola.{ts,js}`, `${__dirname}/entities/User.{ts,js}`],
    migrations: [`${__dirname}/migrations/*.{ts,js}`, `${__dirname}/migrations/*/*.{ts,js}`],
    subscribers: [],
})
