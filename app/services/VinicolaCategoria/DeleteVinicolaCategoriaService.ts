import { VinicolaCategoria } from "../../entities/VinicolaCategoria";
import { DataSource} from "typeorm";



export class DeleteVinicolaCategoriaService {
    async execute(dataSource: DataSource , id: string) {
        const repo = dataSource.getRepository(VinicolaCategoria);

        const vinicolaCategoria = await repo.findOne({ where: { id } });

        if(!vinicolaCategoria) {
            return new Error("VinicolaCategoria does not exists");
        }

        await repo.delete(id);

        return vinicolaCategoria;
    }
}