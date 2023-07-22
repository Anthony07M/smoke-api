import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { CreateSensorDataDto } from './dto/create-sensor-data.dto';

@Injectable()
export class SensorService {
  constructor(private prismaService: PrismaService) {}

  async create(sensorDto: CreateSensorDto) {
    const sensor = await this.prismaService.sensor.create({
      data: sensorDto,
    });

    return sensor;
  }

  async createDataToSensor(
    sensorId: string,
    dataSensorDto: CreateSensorDataDto,
  ) {
    const response = await this.prismaService.sensor_data.create({
      data: {
        ...dataSensorDto,
        sensorId,
      },
    });
    return response;
  }

  async findAll() {
    return await this.prismaService.sensor.findMany({
      include: {
        data: true,
      },
    });
  }

  async findOne(sensorId: string) {
    return await this.prismaService.sensor.findUnique({
      where: { id: sensorId },
    });
  }
}
