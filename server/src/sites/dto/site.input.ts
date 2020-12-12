import { InputType, Field } from "@nestjs/graphql"

@InputType()
export class SiteInput {
  @Field()
  readonly domainProvider: string

  @Field()
  readonly hostProvider: string

  @Field()
  readonly domain: string
  
  @Field()
  readonly holder: string
}