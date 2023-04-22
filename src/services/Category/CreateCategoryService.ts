import { DataSource } from "typeorm";
import { Category } from "../../entities/Category";

type CategoryRequest = {
    name: string;
    icon: string;
}

export class CreateCategoryService {
    async execute({ name, icon }:CategoryRequest, dataSource: DataSource ): Promise<Category | Error> {
        const repo = dataSource.getRepository(Category);

        // SELECT * FROM CATEGORIES WHERE NAME = 'NAME' LIMIT 1
        if(await repo.findOne({ where: { name } })) {
            return new Error("Category already exists");
        }

        const category = repo.create({
            name,
            icon
        });

        await repo.save(category);

        return category;
    }
}
