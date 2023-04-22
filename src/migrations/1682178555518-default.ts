import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1682178555518 implements MigrationInterface {
    name = 'Default1682178555518'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vinicolas" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "image" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3f7d9eca6fd3515624e35267445" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" character varying NOT NULL, "name" character varying NOT NULL, "icon" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vinicolas_categories" ("vinicola_id" character varying NOT NULL, "category_id" character varying NOT NULL, CONSTRAINT "PK_0992f1f576fe00304a9b51b0fc1" PRIMARY KEY ("vinicola_id", "category_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b0a0cf0d281cc5aae3dceb5bda" ON "vinicolas_categories" ("vinicola_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_68db2e7633e570b6c8b0fb4c94" ON "vinicolas_categories" ("category_id") `);
        await queryRunner.query(`ALTER TABLE "vinicolas_categories" ADD CONSTRAINT "FK_b0a0cf0d281cc5aae3dceb5bdae" FOREIGN KEY ("vinicola_id") REFERENCES "vinicolas"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "vinicolas_categories" ADD CONSTRAINT "FK_68db2e7633e570b6c8b0fb4c942" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vinicolas_categories" DROP CONSTRAINT "FK_68db2e7633e570b6c8b0fb4c942"`);
        await queryRunner.query(`ALTER TABLE "vinicolas_categories" DROP CONSTRAINT "FK_b0a0cf0d281cc5aae3dceb5bdae"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_68db2e7633e570b6c8b0fb4c94"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b0a0cf0d281cc5aae3dceb5bda"`);
        await queryRunner.query(`DROP TABLE "vinicolas_categories"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "vinicolas"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
