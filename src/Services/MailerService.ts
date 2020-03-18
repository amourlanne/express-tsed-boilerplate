import {Configuration, Service} from '@tsed/di';
import {Inject} from "@tsed/common";
import EmailTemplate from 'email-templates';
import {transporter} from "../Providers/TransporterProvider";

@Service()
export class MailerService {

  constructor(@Configuration() private readonly configuration: Configuration,
              @Inject(transporter) private readonly transporter: any) {
  }

  public async send(mailOptions) {
    const defaultOptions = this.configuration.get("mailer").default;
    return new EmailTemplate({
      transport: this.transporter,
      ...defaultOptions
    }).send(mailOptions)
  }
}
