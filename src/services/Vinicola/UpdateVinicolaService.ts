import { Category } from "../../entities/Category";
import { Vinicola } from "../../entities/Vinicola";
import { DataSource } from "typeorm";

type VinicolaUpdateRequest = {
    id: string;
    name: string;
    description: string;
    image: string;
    categories: Category[];
}

export class UpdateVinicolaService {
    async execute({ id, name, description, image, categories }: VinicolaUpdateRequest, dataSource: DataSource) {
        const repo = dataSource.getRepository(Vinicola);

        const vinicola = await repo.findOne({ where: { id } });

        if(!vinicola) {
            return new Error("Vinicola does not exists");
        }

        vinicola.name = name ? name : vinicola.name;
        vinicola.description = description ? description : vinicola.description;
        vinicola.image = image ? image : vinicola.image;
        vinicola.categories = categories ? categories : vinicola.categories;

        await repo.save(vinicola);

        return vinicola;
    }
}