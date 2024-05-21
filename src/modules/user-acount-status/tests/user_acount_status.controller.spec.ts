import { Test, TestingModule } from '@nestjs/testing';
import { UserAcountStatusController } from '../controllers/user_acount_status.controller';
import { UserAcountStatusService } from '../services/user_acount_status.service'; // Import UserAcountStatusService
 

describe('UserAcountStatusController', () => {
  let controller: UserAcountStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAcountStatusController],
      providers: [
        {
          provide: UserAcountStatusService,
          useValue: {}, // Mock hoặc giả mạo UserAcountStatusService tại đây
        },
      ],
    }).compile();

    controller = module.get<UserAcountStatusController>(UserAcountStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
