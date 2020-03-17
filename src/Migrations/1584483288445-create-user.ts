import {MigrationInterface, QueryRunner} from "typeorm";

export class createUser1584483288445 implements MigrationInterface {
    name = 'createUser1584483288445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `fullName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `gender` enum ('male', 'female', 'other') NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `users`", undefined);
    }

}
