import { InputType, Field, ID } from "@nestjs/graphql"

@InputType()
export class SiteInput {
  @Field(() => ID)
  readonly domainProviderId: string

  @Field()
  readonly domainProviderName: string

  @Field(() => ID)
  readonly hostProviderId: string

  @Field()
  readonly hostProviderName: string

  @Field(() => ID)
  readonly campaignId: string

  @Field()
  readonly campaignName: string

  @Field()
  readonly domain: string

  @Field()
  readonly dedicatedIp: string

  @Field()
  readonly yandexId: string

  @Field(() => ID)
  readonly holderId: string

  @Field()
  readonly holderName: string

}