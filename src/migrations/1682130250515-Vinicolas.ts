import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Vinicolas1682130250515 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "vinicolas",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "category_id",
                        type: "uuid",
                    },
                    {
                        name: "image",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FK_vinicolas_category",
                        columnNames: ["category_id"],
                        referencedTableName: "categories",
                        referencedColumnNames: ["id"],
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("vinicolas")
    }
}
