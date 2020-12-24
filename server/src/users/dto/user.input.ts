import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class UserInput{
  @Field()
  readonly username: string
  
  @Field()
  readonly password: string
  
  @Field()
  readonly yandexLogin: string

  @Field()
  readonly telegram: string
}