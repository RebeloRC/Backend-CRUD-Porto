import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Containers1664247725301 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Containers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "id_cliente",
                        type: "uuid",
                    },
                    {
                        name: "Numero_container",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "Tipo_container",
                        type: "int"
                    },
                    {
                        name: "Status_container",
                        type: "varchar",
                    },
                    {
                        name: "Categoria_container",
                        type: "varchar",
                    },
                    {
                        name: "Created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_container_cliente",
                        columnNames: ["id_cliente"],
                        referencedTableName: "Clientes",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Containers")
    }

}
