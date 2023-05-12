import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  data: any = [];

  list(): Array<any> {
    return this.data;
  }

  create(data: any): void {
    this.data.push(data);
    return;
  }
}
