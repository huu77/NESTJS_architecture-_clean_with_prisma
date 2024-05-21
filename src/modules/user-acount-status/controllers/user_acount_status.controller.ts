import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { UserAcountStatusService } from '../services/user_acount_status.service';
import { user_account_status } from '@prisma/client';
import { CreateStatusAccountDTO, UpdateStatusAccountDTO } from '../dtos/user-acount-status.req';

@Controller('account-status')
export class UserAcountStatusController {
  constructor(
    private readonly userAcountStatusService: UserAcountStatusService,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getALl(): Promise<user_account_status[]> {
    return this.userAcountStatusService.getAll();
  }
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getOne(@Param('id') id: string): Promise<user_account_status> {
    return this.userAcountStatusService.getOne(parseInt(id));
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body('data') data: CreateStatusAccountDTO,
  ): Promise<user_account_status> {
    return this.userAcountStatusService.create(data);
  }

  @Patch()
  @HttpCode(HttpStatus.OK)
  async update(@Body('data') data:UpdateStatusAccountDTO):Promise<user_account_status>{
    return await this.userAcountStatusService.update(data)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: string):Promise<any>{
     
    return await this.userAcountStatusService.delete(parseInt(id))
  }
}
