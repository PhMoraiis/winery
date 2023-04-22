import { Category } from "../../entities/Category";
import { Vinicola } from "../../entities/Vinicola"
import { DataSource } from "typeorm";

type VinicolaRequest = {
    name: string;
    description: string;
    image: string;
    category_id: string;
}

export class CreateVinicolaService {
    async execute({ name, description, image, category_id }: VinicolaRequest, dataSource: DataSource): Promise<Vinicola | Error> {
        const repo = dataSource.getRepository(Vinicola);
        const repoCategory = dataSource.getRepository(Category);

        if(!(await repoCategory.findOne({ where: { id: category_id } }))) {
            return new Error("Category does not exist")
        }

        const vinicola = repo.create({ name, description, image, category_id });

        await repo.save(vinicola);

        return vinicola;
    }
}