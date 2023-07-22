import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateSensorDataDto } from './dto/create-sensor-data.dto';

@ApiTags('Sensor')
@Controller('sensor')
export class SensorController {
  constructor(private sensorService: SensorService) {}

  @Post()
  async create(@Body() createSensorDto: CreateSensorDto) {
    return await this.sensorService.create(createSensorDto);
  }

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
}
