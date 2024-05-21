import { BadRequestException, Injectable } from '@nestjs/common';
import { user_account_status } from '@prisma/client';
import { WhereFilter } from '../../../core/repositories/WhereType';
import { DataService } from '../../../core/services/DataService';
import { CreateStatusAccountDTO } from '../dtos/user-acount-status.req';

@Injectable()
export class UserAcountStatusService {
  constructor(private dataService: DataService) {}

  async getAll(): Promise<user_account_status[]> {
    const value = await this.dataService.user_account_status.getAll();
    return value;
  }

  async getOne(id: number): Promise<user_account_status> {
    const filter: WhereFilter<user_account_status> = {
      id
    };
    const value = await this.dataService.user_account_status.get(filter);
    if (!value) throw new BadRequestException('Status not found!');
    return value;
  }

  async create(data:CreateStatusAccountDTO):Promise<user_account_status>{
    const value = await this.dataService.user_account_status.create(data)
    if(!value)throw new BadRequestException('Create status acount not success!');
    return value
  }
  async update(data:user_account_status):Promise<user_account_status>{
    const value = await this.dataService.user_account_status.update(data.id,data)
    if(!value) throw new BadRequestException('Update status acount not success!');
    return value
  }
  async delete(id:number):Promise<Boolean>{
    const value = await this.dataService.user_account_status.delete(id)
    if(!value) throw new BadRequestException('Delete status acount not success!');
    return true 
  }
}
