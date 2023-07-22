import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { WebsocketGateway } from './websocket/websocket.gateway';
import { SensorModule } from './sensor/sensor.module';
import { PrismaModule } from './prisma/prisma.module';
import { FireModule } from './fire/fire.module';

@Module({
  imports: [SensorModule, PrismaModule, FireModule],
  providers: [AppService, WebsocketGateway],
})
export class AppModule {}
