import { IsString } from 'class-validator';

export class Sensor {
  @IsString()
  name: string;
}

export class CreateSensorDto extends Sensor {}
