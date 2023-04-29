import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
<<<<<<< HEAD
    host: "database",
=======
    host: "db",
>>>>>>> cc557878840738cb47476d370b6c373e20b9a62f
    port: 5432,
    username: "adminvineyard",
    password: "vineyardpass",
    database: "winery_crud",
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/entities/Vinicola.{ts,js}`, `${__dirname}/entities/User.{ts,js}`],
    migrations: [`${__dirname}/migrations/*.{ts,js}`, `${__dirname}/migrations/*/*.{ts,js}`],
    subscribers: [],
})
