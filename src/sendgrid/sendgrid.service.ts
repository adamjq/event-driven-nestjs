import { Injectable, Logger } from '@nestjs/common';
import sgMail from '@sendgrid/mail';

@Injectable()
export class SendGridService {
  private readonly logger = new Logger(SendGridService.name);

  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    this.logger.debug('Configured SendGrid Service...');
  }

  public async sendEmail(toMail: string) {
    // https://github.com/sendgrid/sendgrid-nodejs/tree/main/packages/mail#quick-start-hello-email
    const msg = {
      to: toMail,
      from: process.env.FROM_MAIL_DOMAIN,
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    await sgMail.send(msg);
    this.logger.debug(`Sent email to ${toMail}`);
  }
}
