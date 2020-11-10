import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SiteController } from './site/site.controller';
import { SiteModule } from './site/site.module';

@Module({
  imports: [SiteModule],
  controllers: [ SiteController]
})
export class AppModule implements NestModule{
  configure(customer: MiddlewareConsumer){
    customer
    .apply(LoggerMiddleware)
    // .exclude({path: '/site/delete', method: RequestMethod.DELETE}) // for ignore path
    .forRoutes({path: '*', method: RequestMethod.ALL})
    
  }
}
