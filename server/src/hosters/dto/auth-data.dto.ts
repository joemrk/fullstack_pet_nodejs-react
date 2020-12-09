import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthData {

  @Field()
  link: string

  @Field()
  login: string

  @Field()
  password: string

}
