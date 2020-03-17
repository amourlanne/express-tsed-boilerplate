import {GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings} from "@tsed/common";

import {getConnectionManager} from "typeorm";

import bodyParser from "body-parser";
import compress from "compression";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import cors from "cors";
import helmet from 'helmet';

@ServerSettings()
export default class Server extends ServerLoader {

  constructor(settings) {
    super(settings);
  }

  async $beforeInit() {
    const connectionManager = getConnectionManager();
    const connection = connectionManager.create(this.settings.get("typeorm"));

    await connection.connect(); // performs connection
  }

  async $onInit() {
    this.set("views", this.settings.get("viewsDir"));
    this.set("view engine", this.settings.get("viewEngine"));
  }

  /**
   * This method let you configure the middleware required by your application to works.
   * @returns {Server}
   */
  public $beforeRoutesInit(): void|Promise<any> {
    this
        .use(cors(this.settings.get("cors")))
        .use(helmet())
        .use(GlobalAcceptMimesMiddleware)
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended: true}))
        .use(cookieParser())
        .use(compress({}))
        .use(methodOverride());

    return null;
  }
}
