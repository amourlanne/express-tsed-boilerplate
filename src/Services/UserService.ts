import { Service } from '@tsed/di';
import {UserRepository} from "../Repositories/UserRepository";
import {User} from "../Entities/User";

@Service()
export class UserService {

  constructor(private readonly userRepository: UserRepository) {}

  public async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public async save(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  public async getOneByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({ username: username});
  }
}
