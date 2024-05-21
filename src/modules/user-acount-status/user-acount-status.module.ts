import { Module } from '@nestjs/common';
import { UserAcountStatusController } from './controllers/user_acount_status.controller';
import { UserAcountStatusService } from './services/user_acount_status.service';
import { CoreModule } from 'src/core/core.module';


@Module({
  imports:[CoreModule],
  controllers: [UserAcountStatusController],
  providers: [UserAcountStatusService]
})
export class UserAcountStatusModule {}
