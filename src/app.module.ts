import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';
import { EmailService } from './email/email.service';
import { EventModule } from './event/event.module';
import { EventService } from './event/event.service';
import { SendGridModule } from './sendgrid/sendgrid.module';
import { SendGridService } from './sendgrid/sendgrid.service';

@Module({
  imports: [],
  providers: [
    EmailModule,
    EmailService,
    EventService,
    EventModule,
    SendGridModule,
    SendGridService,
  ],
})
export class AppModule {}
