import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SiteEntity {
  @Field(() => ID)
  readonly id: string

  @Field(() => ID)
  readonly domainProviderId: string

  @Field()
  readonly domainProviderName: string

  @Field(() => ID)
  readonly hostProviderId: string

  @Field()
  readonly hostProviderName: string

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

  @Field(() => Date)
  readonly createdAt: Date;
}