import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1689944694788 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "users" ("name", "email", "password") VALUES ('Philipe', 'philipe@example.com', '7675')`);
        await queryRunner.query(`INSERT INTO "users" ("name", "email", "password") VALUES ('Philipe Morais', 'philipe.morais@example.com', '767510')`);

        // Adding two vinicolas
        await queryRunner.query(`INSERT INTO "vinicolas" ("name", "description", "image") VALUES ('Vinicola 1', 'Description of Vinicola 1', 'https://cafeviagem.com/wp-content/uploads/2020/05/Vinicola-Miolo.jpg.webp')`);
        await queryRunner.query(`INSERT INTO "vinicolas" ("name", "description", "image") VALUES ('Vinicola 2', 'Description of Vinicola 2', 'https://a.cdn-hotels.com/gdcs/production177/d409/cfcb481e-f14a-4f79-aada-43e687141572.jpg')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "vinicolas"`);
    }

}
