import { VinicolaCategoria } from "../../entities/VinicolaCategoria";
import { DataSource} from "typeorm";

type VinicolaCategoriaUpdateRequest = {
    id: string;
    vinicola: VinicolaCategoria;
    categoria: VinicolaCategoria;
}

export class UpdateVinicolaCategoriaService {
    async execute({ id, vinicola, categoria }: VinicolaCategoriaUpdateRequest, dataSource: DataSource) {
        const repo = dataSource.getRepository(VinicolaCategoria);

        const vinicolaCategoria = await repo.findOne({ where: { id } });

        if(!vinicolaCategoria) {
            return new Error("VinicolaCategoria does not exists");
        }


        await repo.save(vinicolaCategoria);

        return vinicolaCategoria;
    }
}