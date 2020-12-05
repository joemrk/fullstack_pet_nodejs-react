import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class TokenResponse {
  @Field(() => [String], { nullable: true })
  error?: String[]

  @Field({ nullable: true })
  token?: String
}