import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { SiteInput } from './dto/site.input';
import { Site, SiteDocument } from './schemas/site.schema';

@Injectable()
export class SitesService {

  constructor(
    @InjectModel(Site.name) private siteModel: Model<SiteDocument>,
    @InjectConnection() private connection: Connection,
  ) { }

  async findAll(): Promise<Site[]> {
    return await this.siteModel.find().exec()
  }

  async create(domain: SiteInput): Promise<Site> {
    const newSite = new this.siteModel(domain)
    return await newSite.save()
  }

  async findByHolder(holderId: string ): Promise<Site[]>{
    return await this.siteModel.find({holder: holderId})
  }
}