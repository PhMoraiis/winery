import { Vinicola } from "../../entities/Vinicola"
import { DataSource } from "typeorm";

type VinicolaRequest = {
    name: string;
    description: string;
    image: string;
    wine_tasting: boolean;
    tour: boolean;
    restaurant: boolean;
    hotel: boolean;
    bikes: boolean;
    trakking: boolean;
    viewpoint: boolean;
    cafeteria: boolean;
    playground: boolean;
    acessibility: boolean;
    pool: boolean;
    cable_car: boolean;
    kayak: boolean;
}

export class CreateVinicolaService {
    async execute({ name, description, image, wine_tasting, tour, restaurant, hotel, bikes, trakking, viewpoint, cafeteria, playground, acessibility, pool, cable_car, kayak }: VinicolaRequest, dataSource: DataSource): Promise<Vinicola | Error> {
        const repo = dataSource.getRepository(Vinicola);

        if (await repo.findOne({ where: { name } })) {
            return new Error("Vinicola already exists");
        }

        const vinicola = repo.create({
            name, description, image, wine_tasting, tour, restaurant, hotel, bikes, trakking, viewpoint, cafeteria, playground, acessibility, pool, cable_car, kayak
        });

        await repo.save(vinicola);

        return vinicola;
    }
}
