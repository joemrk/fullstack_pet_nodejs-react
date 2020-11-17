import { Test, TestingModule } from '@nestjs/testing';
import { HostersService } from './hosters.service';

describe('HostersService', () => {
  let service: HostersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HostersService],
    }).compile();

    service = module.get<HostersService>(HostersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
