import { Injectable, Logger } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { EventBridgeEvent } from '../types/eventbridge';
import { EventDetailType } from '../types/events';

@Injectable()
export class EventService {
  private readonly logger = new Logger(EventService.name);

  constructor(private emailService: EmailService) {}

  /**
   * Processes an event from AWS EventBridge
   * @param event
   */
  public async process(event: EventBridgeEvent) {
    this.logger.debug(`Handling event ${event['detail-type']}`);
    switch (event['detail-type']) {
      case EventDetailType.InvoicePaidEvent:
        await this.emailService.sendInvoicePaidEmail(event.detail);
        break;
      default:
        this.logger.warn(`Unhandled email event for ${event['detail-type']}`);
    }
  }
}
