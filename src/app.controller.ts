import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Array<any> {
    return this.appService.list();
  }

  @Post()
  create(@Body() data: any): void {
    return this.appService.create(data);
  }
}
