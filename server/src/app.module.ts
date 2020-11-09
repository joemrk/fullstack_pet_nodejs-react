import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SiteController } from './site/site.controller';
import { SiteModule } from './site/site.module';

@Module({
  imports: [SiteModule],
  controllers: [AppController, SiteController],
  providers: [AppService],
})
export class AppModule {}
