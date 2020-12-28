import { InputType, Field, ID } from "@nestjs/graphql"

@InputType()
export class SiteInput {
  @Field()
  readonly domainProviderId: string

  @Field()
  readonly domainProviderName: string

  @Field()
  readonly hostProviderId: string

  @Field()
  readonly hostProviderName: string

  @Field()
  readonly campaignId: string

  @Field()
  readonly campaignName: string

  @Field()
  readonly domain: string

  @Field()
  readonly dedicatedIp: string

  @Field()
  readonly yandexId: string

  @Field()
  readonly holderId: string

  @Field()
  readonly holderName: string

}