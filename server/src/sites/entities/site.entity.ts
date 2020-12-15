import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SiteEntity {
  @Field(() => ID)
  id: string

  @Field(() => ID)
  domainProviderId: string

  @Field()
  domainProviderName: string

  @Field(() => ID)
  hostProviderId: string

  @Field()
  hostProviderName: string

  @Field()
  domain: string

  @Field()
  dedicatedIp: string

  @Field()
  yandexId: string

  @Field(() => ID)
  holderId: string

  @Field()
  holderName: string

  @Field(() => Date)
  createdAt: Date;
}