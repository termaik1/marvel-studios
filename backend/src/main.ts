import { NestFactory } from '@nestjs/core';
import { existsSync, mkdirSync } from 'fs';
import { AppModule } from './app.module';

const port = 8181;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    // logger: ['error'],
  });
  if (!existsSync('storage')) {
    mkdirSync('storage/images', { recursive: true });
  }

  await app.listen(port);

  console.log('server listener port: ', port);
}
bootstrap();
