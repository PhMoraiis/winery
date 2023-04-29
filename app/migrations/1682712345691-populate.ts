import { MigrationInterface, QueryRunner } from "typeorm"

export class Populate1682712345691 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO users (id, name, email, password) VALUES ('2', 'rodrigo', 'rodrigo.rng@gmail.com', 'winery7675')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM users WHERE name = 'rodrigo'`);
    }

}
