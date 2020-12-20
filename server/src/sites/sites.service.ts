import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model, Types } from 'mongoose';
import { SiteInput } from './dto/site.input';
import { Site, SiteDocument } from './schemas/site.schema';
import { Schema} from 'mongoose';


@Injectable()
export class SitesService {

  constructor(
    @InjectModel(Site.name) private siteModel: Model<SiteDocument>,
    @InjectConnection() private connection: Connection,
  ) { }

  async findAll(): Promise<Site[]> {
    return await this.siteModel.find().exec()
  }

  async create({
    domainProviderId,
    hostProviderId,
    campaignId,
    // holderId,
    ...domain}: SiteInput): Promise<Site> {
    const newSite = new this.siteModel({
      domainProviderId: new Types.ObjectId(domainProviderId),
      hostProviderId: new Types.ObjectId(hostProviderId),
      campaignId: new Types.ObjectId(campaignId),
      // holderId: new Schema.Types.ObjectId(holderId),
      ...domain
    })
    return await newSite.save()
  }

  async findByHolder(holderId: string ): Promise<Site[]>{
    return await this.siteModel.find({holder: holderId})
  }
}