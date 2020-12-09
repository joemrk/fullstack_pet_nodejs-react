import { Field, InputType } from '@nestjs/graphql';
import { AuthDataInput } from './auth-data.input';

@InputType()
export class HosterInput {

  @Field()
  name: string

  @Field(() => AuthDataInput)
  authData: AuthDataInput

}
