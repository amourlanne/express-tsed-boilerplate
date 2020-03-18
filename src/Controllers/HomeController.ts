import {Controller, Get, ResponseView} from "@tsed/common";

@Controller("/")
export class HomeController {

  @Get("/")
  @ResponseView("home/index")
  private async index() {
    return {
      message: "Hello World!"
    };
  }
}
