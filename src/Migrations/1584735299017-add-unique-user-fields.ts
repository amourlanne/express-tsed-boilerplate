import {MigrationInterface, QueryRunner} from "typeorm";

export class addUniqueUserFields1584735299017 implements MigrationInterface {
    name = 'addUniqueUserFields1584735299017'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` ADD UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`)", undefined);
        await queryRunner.query("ALTER TABLE `users` ADD UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`)", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP INDEX `IDX_97672ac88f789774dd47f7c8be`", undefined);
        await queryRunner.query("ALTER TABLE `users` DROP INDEX `IDX_fe0bb3f6520ee0469504521e71`", undefined);
    }

}
