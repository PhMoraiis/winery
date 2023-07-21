import { Vinicola } from "../../entities/Vinicola"
import { DataSource } from "typeorm";

type VinicolaRequest = {
    name: string;
    description: string;
    image: string;
}

export class CreateVinicolaService {
    async execute({ name, description, image }: VinicolaRequest, dataSource: DataSource): Promise<Vinicola | Error> {
        const repo = dataSource.getRepository(Vinicola);

        if (await repo.findOne({ where: { name } })) {
            return new Error("Vinicola already exists");
        }

        const vinicola = repo.create({
            name, description, image
        });

        await repo.save(vinicola);

        return vinicola;
    }
}
