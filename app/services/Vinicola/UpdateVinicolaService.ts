import { Vinicola } from "../../entities/Vinicola";
import { VinicolaCategoria } from "../../entities/VinicolaCategoria";
import { DataSource } from "typeorm";

type VinicolaUpdateRequest = {
    id: string;
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

export class UpdateVinicolaService {
    async execute({ id, name, description, image, wine_tasting, tour, restaurant, hotel, bikes, trakking, viewpoint, cafeteria, playground, acessibility, pool, cable_car, kayak }: VinicolaUpdateRequest, dataSource: DataSource) {
        const repo = dataSource.getRepository(Vinicola);

        const vinicola = await repo.findOne({ where: { id } });

        if(!vinicola) {
            return new Error("Vinicola does not exists");
        }

        vinicola.name = name ? name : vinicola.name;
        vinicola.description = description ? description : vinicola.description;
        vinicola.image = image ? image : vinicola.image;
        vinicola.wine_tasting = wine_tasting ? wine_tasting : vinicola.wine_tasting;
        vinicola.tour = tour ? tour : vinicola.tour;
        vinicola.restaurant = restaurant ? restaurant : vinicola.restaurant;
        vinicola.hotel = hotel ? hotel : vinicola.hotel;
        vinicola.bikes = bikes ? bikes : vinicola.bikes;
        vinicola.trakking = trakking ? trakking : vinicola.trakking;
        vinicola.viewpoint = viewpoint ? viewpoint : vinicola.viewpoint;
        vinicola.cafeteria = cafeteria ? cafeteria : vinicola.cafeteria;
        vinicola.playground = playground ? playground : vinicola.playground;
        vinicola.acessibility = acessibility ? acessibility : vinicola.acessibility;
        vinicola.pool = pool ? pool : vinicola.pool;
        vinicola.cable_car = cable_car ? cable_car : vinicola.cable_car;
        vinicola.kayak = kayak ? kayak : vinicola.kayak;

        await repo.save(vinicola);

        return vinicola;
    }
}