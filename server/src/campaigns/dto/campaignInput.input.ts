import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CampaignInput {
  @Field()
  langue: string

  @Field()
  campaignName: string
}
