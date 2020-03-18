import {Repository} from "typeorm";
import {EntityRepository} from "@tsed/typeorm";
import {User} from "../Entities/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

}
