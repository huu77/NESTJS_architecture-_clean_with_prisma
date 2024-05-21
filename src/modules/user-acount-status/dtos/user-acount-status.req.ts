

import { IsNotEmpty,  IsNumber,  IsString} from 'class-validator';

export class CreateStatusAccountDTO {
    @IsNotEmpty ()
    @IsString()
    code:string
    @IsNotEmpty ()
    @IsString()
    name:string

  }

  export class UpdateStatusAccountDTO extends CreateStatusAccountDTO{
    @IsNotEmpty ()
    @IsNumber()
    id:number
  }