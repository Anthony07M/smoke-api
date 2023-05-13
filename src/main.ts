import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as socketio from 'socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:3000',
      methods: '*',
      allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
      credentials: false,
    },
  });
  app.useWebSocketAdapter(new IoAdapter(app));
  await app.listen(3333);
}
bootstrap();
