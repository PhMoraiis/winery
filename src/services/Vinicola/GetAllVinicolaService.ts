import { DataSource } from "typeorm";
import { Vinicola } from "../../entities/Vinicola";


export class GetAllVinicolaService {
    async execute(dataSource: DataSource): Promise<Vinicola[] | Error> {
        const repo = dataSource.getRepository(Vinicola);

        const vinicola = await repo.find({
            relations: ["categories"]
        });

        return vinicola;
    }
}