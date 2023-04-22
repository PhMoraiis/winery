import { Request, Response } from 'express';
import { UpdateVinicolaService } from '../../services/Vinicola/UpdateVinicolaService';
import { AppDataSource } from '../../data-source';

export class UpdateVinicolaController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, description, image, wine_tasting, tour, restaurant, hotel, bikes, trakking, viewpoint, cafeteria, playground, acessibility, pool, cable_car, kayak  } = request.body;

        const service = new UpdateVinicolaService();

        const dataSource = AppDataSource;

        const result = await service.execute({ id, name, description, image, wine_tasting, tour, restaurant, hotel, bikes, trakking, viewpoint, cafeteria, playground, acessibility, pool, cable_car, kayak }, dataSource);

        if (result instanceof Error) {
            return response.status(400).json({ error: result.message });
        }

        return response.json(result);
    }
}