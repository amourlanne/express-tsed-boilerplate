import {Controller, Get, ResponseView} from "@tsed/common";

@Controller("/chat")
export class ChatController {

  @Get("/")
  @ResponseView("chat/index")
  private async index() {
    return {
      message: "Hello World!"
    };
  }
}
