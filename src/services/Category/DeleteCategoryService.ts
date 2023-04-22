import { Category } from "../../entities/Category";
import { DataSource } from "typeorm";

export class DeleteCategoryService {
    async execute(dataSource: DataSource, id: string) {
        const repo = dataSource.getRepository(Category);

        const category = await repo.findOne({ where: { id } });

        if(!category) {
            return new Error("Category not found");
        }

        await repo.delete(id);

        return category;
    }
}
