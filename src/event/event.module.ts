import { Module } from '@nestjs/common';
import { EmailModule } from '../email/email.module';
import { EventService } from './event.service';

@Module({
  imports: [EmailModule],
  providers: [EventService],
})
export class EventModule {}
