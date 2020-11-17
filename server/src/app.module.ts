import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { SitesModule } from './sites/sites.module';
import { Site } from './sites/entities/site.entity';
import { Hoster } from './hosters/entities/hoster.entity';
import { HostersService } from './hosters/hosters.service';
import { HostersModule } from './hosters/hosters.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot(
      {
        type: "postgres",
        host: process.env.POSTGRESQL_HOST,
        port: parseInt(process.env.POSTGRESQL_PORT),
        username: process.env.POSTGRESQL_USER,
        password: process.env.POSTGRESQL_PASS,
        database: process.env.POSTGRESQL_DB_NAME,
        entities: [User, Site, Hoster ],
        synchronize: true,
      }
    ),
    SitesModule,
    HostersModule
  ],
  controllers: [AppController],
  providers: [HostersService],
  // exports:[ConfigModule]
})
export class AppModule implements NestModule {
  configure(customer: MiddlewareConsumer) {
    customer
      .apply(LoggerMiddleware)
      // .exclude({path: '/site/delete', method: RequestMethod.DELETE}) // for ignore path
      .forRoutes({ path: '*', method: RequestMethod.ALL })

  }
}
