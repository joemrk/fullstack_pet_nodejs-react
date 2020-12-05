import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SitesModule } from './sites/sites.module';
import { UsersModule } from './users/users.module';
import { HostersModule } from './hosters/hosters.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({req}) => ({...req})
      // context: ({ req }) => {
      //   console.log(req.headers);
      //   return ({ req });
      // }
    }),
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    SitesModule,
    HostersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
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