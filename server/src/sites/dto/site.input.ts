import { InputType, Field, ID } from "@nestjs/graphql"

@InputType()
export class SiteInput {
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

}