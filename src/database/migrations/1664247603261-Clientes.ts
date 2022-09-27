import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Clientes1664247603261 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Clientes",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "Nome_cliente",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "Created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Clientes")
    }

}


