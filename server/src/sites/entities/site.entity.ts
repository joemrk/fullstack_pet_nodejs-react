import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SiteEntity {
  @Field(() => ID)
  readonly id: string

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

  @Field(() => Date)
  readonly createdAt: Date;
}