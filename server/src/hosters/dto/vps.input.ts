import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class VpsInput{
  @Field()
  ip: string

  @Field()
  login: string

  @Field()
  pass: string 

  @Field()
  panelName: string

  @Field()
  panelUrl: string
}