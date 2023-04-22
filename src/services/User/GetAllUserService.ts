import { DataSource } from "typeorm";
import { User } from "../../entities/User";

export class GetAllUserService {
    async execute(dataSource: DataSource): Promise<User[] | Error> {
        const repo = dataSource.getRepository(User);

        const users = await repo.find();

        return users;
    }
}