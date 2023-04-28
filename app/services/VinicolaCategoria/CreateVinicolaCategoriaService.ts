import { VinicolaCategoria } from "../../entities/VinicolaCategoria";
import { DataSource} from "typeorm";

export interface VinicolaCategoriaRequest {
    vinicola: VinicolaCategoria;
    categoria: VinicolaCategoria;
}

export class CreateVinicolaCategoriaService {
    async execute({ vinicola, categoria }: VinicolaCategoriaRequest, dataSource: DataSource): Promise<VinicolaCategoria | Error> {
        const repo = dataSource.getRepository(VinicolaCategoria);

        if(await repo.findOne({ where: { vinicola } })) {
            return new Error("VinicolaCategoria already exists");
        }

        const vinicolaCategoria = repo.create({ vinicola, categoria });

        await repo.save(vinicolaCategoria);

        return vinicolaCategoria;
    }
}