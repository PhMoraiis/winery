import { Vinicola } from "../../entities/Vinicola";
import { DataSource } from "typeorm";

export class GetVinicolaByIdService {
    async execute(dataSource: DataSource, id: string) {
        const repo = dataSource.getRepository(Vinicola);

        const vinicola = await repo.findOne({ where: { id } });

        if(!vinicola) {
            return new Error("Vinicola not found");
        }

        return vinicola;
    }
}