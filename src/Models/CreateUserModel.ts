// @ts-ignore
import {IgnoreProperty} from "@tsed/common";
// @ts-ignore
import {User} from "../Entities/User";

// @ts-ignore
export class CreateUserModel extends User {

    @IgnoreProperty()
    id: number;
}
