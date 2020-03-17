import {Controller, Get, ResponseView} from "@tsed/common";

@Controller("/")
export class HomeController {

  @Get("/")
  @ResponseView("home/index")
  async index() {
    return {
      message: "Hello World!"
    };
  }
}
