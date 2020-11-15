import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { HttpExceptionFilter } from './filters/http-exception.filter';
// import {LoggerMiddleware} from './middleware/logger.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new HttpExceptionFilter());
  // app.use(LoggerMiddleware)
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
