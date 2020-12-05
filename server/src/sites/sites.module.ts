import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { MongooseModule } from '@nestjs/mongoose';
import {  Site, SiteSchema } from './schemas/site.schema';
import { SitesResolver } from './sites.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Site.name, schema: SiteSchema }]),
  ],
  providers: [SitesService, SitesResolver],
  exports: [SitesService],
})
export class SitesModule { }
