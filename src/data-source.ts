import "reflect-metadata"
import { DataSource } from "typeorm"

import { Vinicolas1682130250515 } from "./migrations/1682130250515-Vinicolas"
import { CreateCategories1682128795271 } from "./migrations/1682128795271-CreateCategories"
import { Users1682131004379 } from "./migrations/1682131004379-Users"

import { Category } from "./entities/Category"
import { Vinicola } from "./entities/Vinicola"
import { User } from "./entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "winery_crud",
    synchronize: true,
    logging: false,
    entities: [Category, Vinicola, User],
    migrations: [Vinicolas1682130250515, CreateCategories1682128795271, Users1682131004379],
    subscribers: [],
})
