 
import { user_account,google_account,user_account_status,user_profile} from '@prisma/client'; 
import GenericRepository from '../repositories/generic.repository';
 

 

export default abstract class IDataServices {
  abstract user_account_status: GenericRepository<user_account_status>;
  abstract user_account: GenericRepository<user_account>;
  abstract user_profile: GenericRepository<user_profile>;
  abstract google_account: GenericRepository<google_account>;
 // init some model extend from IGenericRepository
}