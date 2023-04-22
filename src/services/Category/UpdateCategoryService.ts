import { Category } from "../../entities/Category";
import { DataSource } from "typeorm";

type CategoryUpdateRequest = {
    id: string;
    name: string;
    icon: string;
}

export class UpdateCategoryService {
    async execute({ id, name, icon }:CategoryUpdateRequest, dataSource: DataSource) {
        const repo = dataSource.getRepository(Category);

        const category = await repo.findOne({ where: { id } });

        if(!category) {
            return new Error("Category does not exists");
        }

        category.name = name ? name : category.name;
        category.icon = icon ? icon : category.icon;

        await repo.save(category);

        return category;
    }
}