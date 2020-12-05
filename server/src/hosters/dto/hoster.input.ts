import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HosterInput {

  @Field()
  name: string

  @Field()
  url: string

}
