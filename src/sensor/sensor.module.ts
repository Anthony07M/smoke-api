import { Module } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SensorController } from './sensor.controller';

@Module({
  imports: [PrismaModule],
  providers: [SensorService],
  controllers: [SensorController],
})
export class SensorModule {}
