import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CampaignsService } from './campaigns.service';
import { Campaign } from './entities/campaign.entity';
import { CampaignInput } from './dto/campaignInput.input';

@Resolver(() => Campaign)
export class CampaignsResolver {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Mutation(() => Campaign)
  createCampaign(@Args('campaignInput') campaignInput: CampaignInput) {
    return this.campaignsService.create(campaignInput);
  }

  @Query(() => [Campaign], { name: 'campaigns' })
  campaigns() {
    return this.campaignsService.findAll();
  }

  @Query(() => Campaign, { name: 'campaign' })
  campaign(@Args('id', { type: () => String }) id: string) {
    return this.campaignsService.findOne(id);
  }

  // @Mutation(() => Campaign)
  // updateCampaign(@Args('campaignInput') campaignInput: Campaign) {
  //   return this.campaignsService.update(campaignInput.id, campaignInput);
  // }

  // @Mutation(() => Campaign)
  // removeCampaign(@Args('id', { type: () => String }) id: string) {
  //   return this.campaignsService.remove(id);
  // }
}
