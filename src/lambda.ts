import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Context } from 'aws-lambda';
import { EventService } from './event/event.service';

let eventService: EventService;

async function bootstrap() {
  if (!eventService) {
    const app = await NestFactory.createApplicationContext(AppModule);
    eventService = app.get(EventService);
  }
}

export const handler = async (event: any, context: Context, callback: any) => {
  console.log(event);
  await bootstrap();

  if (event.source === 'serverless-plugin-warmup') {
    console.log('WarmUp - Lambda warmed!');
    return {};
  }

  await eventService.handleEvent(event);
};
