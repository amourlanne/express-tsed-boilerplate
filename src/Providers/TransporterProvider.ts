import {Configuration, registerProvider} from "@tsed/di";

import nodemailer from 'nodemailer';

export const transporter = Symbol.for("transporter");

registerProvider({
  provide: transporter,
  deps: [Configuration],
  async useAsyncFactory(settings: Configuration) {
    return nodemailer.createTransport(settings.get("mailer").transport);
  }
});
