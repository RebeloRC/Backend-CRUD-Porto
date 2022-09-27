import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Movimentacoes1664294255815 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Movimentacoes",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "id_cliente",
                        type: "uuid",
                    },
                    {
                        name: "id_container",
                        type: "uuid",
                    },
                    {
                        name: "Tipo_movimentacao",
                        type: "varchar",
                    },
                    {
                        name: "data_hora_inicio",
                        type: "varchar",
                    },
                    {
                        name: "data_hora_fim",
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
                        name: "fk_cliente_id",
                        columnNames: ["id_cliente"],
                        referencedTableName: "Clientes",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_container_id",
                        columnNames: ["id_container"],
                        referencedTableName: "Containers",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Movimentacoes")
    }

}
