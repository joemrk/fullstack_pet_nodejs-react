import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class AuthDataInput {

  @Field()
  link: string

  @Field()
  login: string

  @Field()
  password: string

}
