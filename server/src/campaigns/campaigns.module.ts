import { Module } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CampaignsResolver } from './campaigns.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignSchema, Campaign } from './schemas/campaign.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }]),
  ],
  providers: [CampaignsResolver, CampaignsService]
})
export class CampaignsModule {}
