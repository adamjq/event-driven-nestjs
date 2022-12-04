import { Injectable, Logger } from '@nestjs/common';
import { SendGridService } from '../sendgrid/sendgrid.service';
import { InvoicePaidEventData } from '../types/events';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(private sendGridService: SendGridService) {}

  async sendInvoicePaidEmail(data: InvoicePaidEventData) {
    await this.sendGridService.sendEmail(data.user.email);
    this.logger.log(
      `Successfully sent new invoice paid email to user ${data.user.id} ${data.user.email}`,
    );
  }
}
