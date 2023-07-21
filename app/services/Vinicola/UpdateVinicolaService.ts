import { Vinicola } from "../../entities/Vinicola";
import { DataSource } from "typeorm";

type VinicolaUpdateRequest = {
    id: string;
    name: string;
    description: string;
    image: string;
}

export class UpdateVinicolaService {
    async execute({ id, name, description, image }: VinicolaUpdateRequest, dataSource: DataSource) {
        const repo = dataSource.getRepository(Vinicola);

        const vinicola = await repo.findOne({ where: { id } });

        if(!vinicola) {
            return new Error("Vinicola does not exists");
        }

        vinicola.name = name ? name : vinicola.name;
        vinicola.description = description ? description : vinicola.description;
        vinicola.image = image ? image : vinicola.image;

        await repo.save(vinicola);

        return vinicola;
    }
}