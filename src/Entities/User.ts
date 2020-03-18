import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import {Enum, Property, Required} from "@tsed/common";

import {GenderEnum} from "../Enums/GenderEnum";

@Entity("users")
export class User {

  @Property()
  @PrimaryGeneratedColumn()
  id: number;

  @Property()
  @Required()
  @Column()
  @Property()
  username: string;

  @Property()
  @Required()
  @Column()
  @Property()
  fullName: string;

  @Property()
  @Required()
  @Column()
  email: string;

  @Property()
  @Required()
  @Enum(GenderEnum)
  @Column({
    type: 'enum',
    enum: GenderEnum,
  })
  gender: GenderEnum;
}
