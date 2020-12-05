import { Module } from '@nestjs/common';
import { HostersService } from './hosters.service';
import { HostersResolver } from './hosters.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Hoster, HosterSchema } from './schemas/hoster.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hoster.name, schema: HosterSchema }]),
  ],
  providers: [HostersResolver, HostersService]
})
export class HostersModule {}
