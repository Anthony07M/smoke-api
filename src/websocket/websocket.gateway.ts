import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AppService } from 'src/app.service';

@WebSocketGateway({
  cors: '*',
})
export class WebsocketGateway {
  @WebSocketServer()
  server: Server;

  constructor(private appService: AppService) {}

  @SubscribeMessage('datas')
  handleEvent(@MessageBody() data: any): any {
    return data;
  }
}
