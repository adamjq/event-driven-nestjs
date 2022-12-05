import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Callback, Context, Handler } from 'aws-lambda';
import { EventService } from './event/event.service';

// https://docs.nestjs.com/faq/serverless#using-standalone-application-feature
export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  console.log(event);
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const eventService = appContext.get(EventService);
  return eventService.process(event);
};
