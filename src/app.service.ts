import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  data: any = [];

  list(): Array<any> {
    return this.data;
  }

  create(data: any): any {
    this.data.push(data);
    return data;
  }

  clearDatabase(): void {
    this.data = [];
  }
}
