import {Entity, Column, PrimaryGeneratedColumn, Unique} from "typeorm";
import {Email, Enum, MaxLength, MinLength, Property, Required} from "@tsed/common";

import {GenderEnum} from "../Enums/GenderEnum";

@Entity("users")
@Unique(['username'])
@Unique(['email'])
export class User {

    @Property()
    @PrimaryGeneratedColumn()
    id: number;

    @Required()
    @MaxLength(20)
    @MinLength(4)
    @Column()
    username: string;

    @Required()
    @Column()
    fullName: string;

    @Email()
    @Required()
    @Column()
    email: string;

    @Required()
    @Enum(GenderEnum)
    @Column({
        type: 'enum',
        enum: GenderEnum,
    })
    gender: GenderEnum;
}
