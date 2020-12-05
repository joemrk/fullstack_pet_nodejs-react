import { ObjectType, Field, ID } from "@nestjs/graphql"


@ObjectType()
export class Hoster{
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field()
  url: string
}