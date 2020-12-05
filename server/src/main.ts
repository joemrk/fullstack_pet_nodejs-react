import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new HttpExceptionFilter());
  // app.use(LoggerMiddleware)
  app.useGlobalPipes(new ValidationPipe({
    transform: true // будет пытаться типизировать все данные, что идут в контроллер
  }));
  await app.listen(4000);
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
