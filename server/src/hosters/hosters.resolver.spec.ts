import { Test, TestingModule } from '@nestjs/testing';
import { HostersResolver } from './hosters.resolver';
import { HostersService } from './hosters.service';

describe('HostersResolver', () => {
  let resolver: HostersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HostersResolver, HostersService],
    }).compile();

    resolver = module.get<HostersResolver>(HostersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
