import {EntityRepository, Repository} from "typeorm";
import {User} from "../Entities/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

}
