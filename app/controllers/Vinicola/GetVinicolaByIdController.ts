import { Request, Response } from "express";
import { GetVinicolaByIdService } from "../../services/Vinicola/GetVinicolaByIdService";
import { AppDataSource } from "../../data-source";

export class GetVinicolaByIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new GetVinicolaByIdService();

        const dataSource = AppDataSource;

        const result = await service.execute(dataSource, id);

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}