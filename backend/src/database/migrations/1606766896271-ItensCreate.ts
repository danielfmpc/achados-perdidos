import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export default class ItensCreate1606766896271 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'itens',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'sector',
            type: 'varchar',
          },
          {
            name: 'photo_id',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
    await queryRunner.createIndex(
      'itens',
      new TableIndex({
        name: 'FK_ITENS_PHOTOS',
        columnNames: ['photo_id'],
      }),
    );
    await queryRunner.createForeignKey(
      'itens',
      new TableForeignKey({
        name: 'FK_ITENS_PHOTOS',
        columnNames: ['photo_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'photos',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('itens', 'FK_ITENS_PHOTOS');
    await queryRunner.dropIndex('itens', 'FK_ITENS_PHOTOS');
    await queryRunner.dropTable('itens');
  }
}
