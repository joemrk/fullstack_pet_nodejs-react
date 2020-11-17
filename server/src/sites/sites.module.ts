import { Site } from './entities/site.entity';
import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Site])],
  providers: [SitesService],
  exports: [SitesService]
})
export class SitesModule {}
