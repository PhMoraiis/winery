import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1682196951310 implements MigrationInterface {
    name = 'Default1682196951310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vinicolas" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "image" character varying NOT NULL, "wine_tasting" boolean NOT NULL, "tour" boolean NOT NULL, "restaurant" boolean NOT NULL, "hotel" boolean NOT NULL, "bikes" boolean NOT NULL, "trakking" boolean NOT NULL, "viewpoint" boolean NOT NULL, "cafeteria" boolean NOT NULL, "playground" boolean NOT NULL, "acessibility" boolean NOT NULL, "pool" boolean NOT NULL, "cable_car" boolean NOT NULL, "kayak" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3f7d9eca6fd3515624e35267445" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "vinicolas"`);
    }

}
