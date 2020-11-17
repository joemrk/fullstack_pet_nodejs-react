import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hoster } from './entities/hoster.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Hoster])],
})
export class HostersModule {}
