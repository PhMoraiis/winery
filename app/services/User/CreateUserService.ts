import { User } from "../../entities/User";
import { DataSource } from "typeorm";

type UserRequest = {
    name: string;
    email: string;
    password: string;
}

export class CreateUserService {
    async execute({ name, email, password }:UserRequest, dataSource: DataSource): Promise<User | Error> {
        const repo = dataSource.getRepository(User);

        // SELECT * FROM USERS WHERE EMAIL = 'EMAIL' LIMIT 1
        if(await repo.findOne({ where: { email } })) {
            return new Error("User already exists");
        }

        const user = repo.create({
            name,
            email,
            password
        });

        await repo.save(user);

        return user;
    }
}