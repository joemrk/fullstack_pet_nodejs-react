import { InputType, Field } from "@nestjs/graphql"

@InputType()
export class SiteInput {
  @Field()
  readonly domain: string
  
  @Field()
  readonly holder: string
}