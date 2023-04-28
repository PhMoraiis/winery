import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { GetAllVinicolaService } from "../../services/Vinicola/GetAllVinicolaService";

export class GetAllVinicolaController {
    async handle(request: Request, response: Response) {
        const service = new GetAllVinicolaService();

        const dataSource = AppDataSource;

        const vinicola = await service.execute(dataSource);

        return response.json(vinicola);
    }
}