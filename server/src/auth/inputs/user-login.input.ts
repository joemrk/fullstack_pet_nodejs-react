import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class UserLogin{
  @Field()
  readonly username: string
  
  @Field()
  readonly password: string
}