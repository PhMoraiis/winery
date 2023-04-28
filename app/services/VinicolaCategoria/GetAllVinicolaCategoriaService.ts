import { VinicolaCategoria } from "../../entities/VinicolaCategoria";
import { DataSource} from "typeorm";

export class GetAllVinicolaCategoriaService {
    async execute(dataSource: DataSource): Promise<VinicolaCategoria[] | Error> {
        const repo = dataSource.getRepository(VinicolaCategoria);

        const vinicolaCategorias = await repo.find();

        if(!vinicolaCategorias) {
            return new Error("VinicolaCategoria does not exists");
        }

        return vinicolaCategorias;
    }
}