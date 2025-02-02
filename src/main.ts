import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log('App is running on port:', process.env.PORT ?? 8000);
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
