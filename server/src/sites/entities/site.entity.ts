import { ObjectType, Field, ID } from "@nestjs/graphql"

@ObjectType()
export class SiteEntity {
  @Field(() => ID)
  id: string

  @Field()
  domain: string

  @Field()
  holder: string
}