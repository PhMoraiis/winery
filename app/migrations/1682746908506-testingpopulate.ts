import { MigrationInterface, QueryRunner } from "typeorm"

export class Testingpopulate1682746908506 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO vinicolas (id, name, description, image, wine_tasting, tour, restaurant, hotel, bikes, trakking, viewpoint, cafeteria, playground, acessibility, pool, cable_car, kayak) VALUES ('1', 'Casa Silva', 'San Fernando, Región del Libertador General Bernardo O’Higgins. Colchagua, Chile', 'https://cdn.shopify.com/s/files/1/0640/9784/5461/products/casaSilva1.png?v=1652823694', 'true', 'true', 'true', 'true', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false')`);
        await queryRunner.query(`INSERT INTO users (id, name, email, password) VALUES ('1', 'rodrigo', 'rodrigo.rng@gmail.com', 'winery767510')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM vinicolas WHERE id = '1'`);
        await queryRunner.query(`DELETE FROM users WHERE id = '1'`);
    }
}
