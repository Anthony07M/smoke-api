import { IsNumber } from 'class-validator';

export class SensorData {
  @IsNumber()
  value: number;
}

export class CreateSensorDataDto extends SensorData {}
