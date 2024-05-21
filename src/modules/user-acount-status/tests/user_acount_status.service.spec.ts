import { Test, TestingModule } from '@nestjs/testing';
import { UserAcountStatusService } from '../services/user_acount_status.service';
import { DataService } from '../../../core/services/DataService';
 

describe('UserAcountStatusService', () => {
  let service: UserAcountStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserAcountStatusService,
        {
          provide: DataService,
          useValue: {}, // Mock hoặc giả mạo DataService tại đây
        },
      ],
    }).compile();

    service = module.get<UserAcountStatusService>(UserAcountStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
