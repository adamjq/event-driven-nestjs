import { Module } from '@nestjs/common';
import { SendGridModule } from '../sendgrid/sendgrid.module';
import { EmailService } from './email.service';

@Module({
  imports: [SendGridModule],
  providers: [EmailService],
})
export class EmailModule {}
