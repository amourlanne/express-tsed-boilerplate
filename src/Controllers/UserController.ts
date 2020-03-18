import {Controller, Get, PathParams, Required} from "@tsed/common";
import {UserService} from "../Services/UserService";
import {User} from "../Entities/User";
import {MailerService} from "../Services/MailerService";
import {BadRequest} from "ts-httpexceptions";

@Controller("/users")
export class UserController {

  constructor(private readonly userService: UserService,
              private readonly mailerService: MailerService) {}

  @Get("/")
  private async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get("/:username/send-welcome")
  private async sendWelcome(@Required @PathParams("username") username: string) {
    const user = await this.userService.getOneByUsername(username);

    if(!user) throw new BadRequest("user not found");

    const mailOptions = {
      template: 'welcome',
      message: {
        to: user.email,
      },
      locals: {
        fullName: user.fullName,
        username: user.username
      }
    };

    return await this.mailerService.send(mailOptions)
  }
}
