import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { WebsocketGateway } from './websocket/websocket.gateway';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly websocketGateway: WebsocketGateway,
  ) {}

  @Get()
  getHello(): Array<any> {
    return this.appService.list();
  }

  @Post()
  create(@Body() data: any): void {
    const res = this.appService.create(data);
    this.websocketGateway.server.emit('datas', res);
  }

  @Delete()
  clearDatabase(): void {
    this.appService.clearDatabase();
  }
}
