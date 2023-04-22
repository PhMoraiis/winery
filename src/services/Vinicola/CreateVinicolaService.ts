import { Category } from "../../entities/Category";
import { Vinicola } from "../../entities/Vinicola"
import { DataSource, In } from "typeorm";

type VinicolaRequest = {
    name: string;
    description: string;
    image: string;
    categories: Category[];
}

export class CreateVinicolaService {
    async execute({ name, description, image, categories }: VinicolaRequest, dataSource: DataSource): Promise<Vinicola | Error> {
        const repo = dataSource.getRepository(Vinicola);
        const repoCategory = dataSource.getRepository(Category);

        const categoryIds = categories.map(category => category.id);
        const foundCategories = await repoCategory.find({ where: { id: In(categoryIds) } });

        if(foundCategories.length !== categories.length) {
            return new Error("One or more categories do not exist")
        }

        const vinicola = repo.create({ name, description, image, categories });

        await repo.save(vinicola);

        return vinicola;
    }
}
