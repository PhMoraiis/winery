import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1689941506935 implements MigrationInterface {
    name = 'Default1689941506935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vinicolas" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" character varying NOT NULL, "image" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_91cf670f8b7111fd6fc17602a3a" UNIQUE ("name"), CONSTRAINT "PK_3f7d9eca6fd3515624e35267445" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "vinicolas"`);
    }

}
