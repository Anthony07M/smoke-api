import { Module } from '@nestjs/common';
import { FireService } from './fire.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FireService],
})
export class FireModule {}
