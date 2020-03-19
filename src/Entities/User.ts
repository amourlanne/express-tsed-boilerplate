import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import {Email, Enum, MaxLength, MinLength, Property, Required} from "@tsed/common";

import {GenderEnum} from "../Enums/GenderEnum";

@Entity("users")
export class User {

  @Property()
  @PrimaryGeneratedColumn()
  id: number;

  @Required()
  @MaxLength(20)
  @MinLength(3)
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
