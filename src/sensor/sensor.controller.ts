import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseFilters,
} from '@nestjs/common';
import { SensorService } from './sensor.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateSensorDataDto } from './dto/create-sensor-data.dto';
import { PrismaExecption } from 'src/exceptions/prisma/sensor.exception';

@ApiTags('Sensor')
@UseFilters(PrismaExecption)
@Controller('sensor')
export class SensorController {
  constructor(private sensorService: SensorService) {}

  @Post()
  async create(@Body() createSensorDto: CreateSensorDto) {
    return await this.sensorService.create(createSensorDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('data/:sensorId')
  async createSensorData(
    @Body() createSensorDataDto: CreateSensorDataDto,
    @Param('sensorId') sensorId: string,
  ) {
    return await this.sensorService.createDataToSensor(
      sensorId,
      createSensorDataDto,
    );
  }

  @Get()
  async findAll() {
    return await this.sensorService.findAll();
  }

  @Get(':sensorId')
  async findOne(@Param('sensorId') sensorId: string) {
    return await this.sensorService.findOne(sensorId);
  }
}
