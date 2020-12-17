import { Injectable } from '@nestjs/common';
import { CampaignInput } from './dto/campaignInput.input';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Campaign, CampaignDocument } from './schemas/campaign.schema';
import { Model, Connection } from 'mongoose';

@Injectable()
export class CampaignsService {

  constructor(
    @InjectModel(Campaign.name) private campaignModel: Model<CampaignDocument>,
    @InjectConnection() private connection: Connection,
  ) { }

  async create(campaignInput: CampaignInput) {
    const newCampaign = new this.campaignModel({
      langue: campaignInput.langue,
      campaignName: campaignInput.campaignName,
      fullCampaignName: `${campaignInput.langue} - ${campaignInput.campaignName}`
    })
    return await newCampaign.save()
  }

  async findAll() {
    return await this.campaignModel.find().exec()
  }

  async findOne(id: string) {
    return await this.campaignModel.findById(id)
  }

  update(id: string, updateCampaignInput: CampaignInput) {
    return `This action updates a #${id} campaign`;
  }

  async remove(id: string) {
    return `This action removes a #${id} campaign`;
  }
}
