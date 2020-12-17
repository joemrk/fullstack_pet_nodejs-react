import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Campaign {
  @Field(() => ID)
  id: string;

  @Field()
  countryCode: string

  @Field()
  campaignName: string

  @Field()
  fullCampaignName: string
}
