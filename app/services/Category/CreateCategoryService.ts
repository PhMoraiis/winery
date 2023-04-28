import { DataSource } from "typeorm";
import { Category } from "../../entities/Category";
import { VinicolaCategoria } from "../../entities/VinicolaCategoria";

type CategoryRequest = {
    name: string;
    icon: string;
    vinicolaCategorias: VinicolaCategoria[];
}

export class CreateCategoryService {
    async execute({ name, icon, vinicolaCategorias }:CategoryRequest, dataSource: DataSource ): Promise<Category | Error> {
        const repo = dataSource.getRepository(Category);

        // SELECT * FROM CATEGORIES WHERE NAME = 'NAME' LIMIT 1
        if(await repo.findOne({ where: { name } })) {
            return new Error("Category already exists");
        }

        const category = repo.create({
            name,
            icon,
            vinicolaCategorias
        });

        await repo.save(category);

        return category;
    }
}
