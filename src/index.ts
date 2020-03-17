import {ServerLoader} from "@tsed/common";
import config from "../config/server";

import Server from "./Server";

async function bootstrap() {
  try {
    const server = await ServerLoader.bootstrap(Server, config);

    await server.listen();
  } catch (error) {
    console.error(error);
  }
}

bootstrap();
