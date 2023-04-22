import { DataSource } from "typeorm";
import { Category } from "../../entities/Category";


export class GetAllCategoriesService {
    async execute(dataSource: DataSource): Promise<Category[] | Error> {
        const repo = dataSource.getRepository(Category);

        const categories = await repo.find();

        return categories;
    }
}