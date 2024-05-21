import { Module } from '@nestjs/common';
import { DataService } from './services/DataService';
import { PrismaService } from './prisma/prisma.service';
 
@Module({
  providers: [DataService,PrismaService],
  exports: [DataService, PrismaService]
})
export class CoreModule {}
