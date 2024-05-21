import { Injectable } from '@nestjs/common';
import IDataServices from '../abstracts/IDataServices';
import GenericRepository from '../repositories/generic.repository';
import { user_account, google_account, user_account_status, user_profile } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
 
@Injectable()
export class DataService implements IDataServices {
  user_account_status: GenericRepository<user_account_status>;
  user_account: GenericRepository<user_account>;
  user_profile: GenericRepository<user_profile>;
  google_account: GenericRepository<google_account>;

  constructor(private prismaClient: PrismaService ) {
    this.user_account_status = new GenericRepository<user_account_status>(this.prismaClient, 'user_account_status');
    this.user_account = new GenericRepository<user_account>(this.prismaClient, 'user_account');
    this.user_profile = new GenericRepository<user_profile>(this.prismaClient, 'user_profile');
    this.google_account = new GenericRepository<google_account>(this.prismaClient, 'google_account');
  }
}
