import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // FIXME use env variables for origin
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  });
  console.log('App is running on port:', process.env.PORT ?? 8000);
  await app.listen(process.env.PORT ?? 8000);
  console.log('App is running on port:', process.env.PORT ?? 8000);
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
