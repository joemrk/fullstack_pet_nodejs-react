import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CampaignInput {
  @Field()
  countryCode: string

  @Field()
  campaignName: string
}
