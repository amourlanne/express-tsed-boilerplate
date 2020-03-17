import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import {Enum, Required} from "@tsed/common";

import {GenderEnum} from "../Enums/GenderEnum";

@Entity("users")
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  fullName: string;

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
