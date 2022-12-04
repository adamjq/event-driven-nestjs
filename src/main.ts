import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EventService } from './event/event.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const eventService = app.get(EventService);
}
bootstrap();
