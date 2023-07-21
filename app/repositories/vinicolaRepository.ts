import { AppDataSource } from "../data-source";
import { Vinicola } from "../entities/Vinicola";

export const vinicolaRepository = AppDataSource.getRepository(Vinicola);
 