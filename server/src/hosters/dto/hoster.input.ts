import { Field, InputType } from '@nestjs/graphql';
import { AuthDataInput } from './auth-data.input';

@InputType()
export class HosterInput {

  @Field()
  readonly name: string

  @Field()
  readonly siteLink: string

  @Field(() => AuthDataInput)
  readonly authData: AuthDataInput

}
