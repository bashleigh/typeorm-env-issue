import {MigrationInterface, QueryRunner} from 'typeorm';

export class TestMigration1543669911606 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        console.log('testing');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
