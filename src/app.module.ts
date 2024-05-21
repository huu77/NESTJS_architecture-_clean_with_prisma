import { Module } from '@nestjs/common';
import { UserAcountStatusModule } from './modules/user-acount-status/user-acount-status.module';
import { CoreModule } from './core/core.module';


@Module({
  imports: [ UserAcountStatusModule,CoreModule],
  controllers: [],
  providers: [],
 
 
})
export class AppModule {}
