import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model, Types } from 'mongoose';
import { SiteInput } from './dto/site.input';
import { Site, SiteDocument } from './schemas/site.schema';
import { Schema} from 'mongoose';
import { SitesResponse } from './entities/sites-response.entity';
import { SiteEntity } from './entities/site.entity';


@Injectable()
export class SitesService {

  constructor(
    @InjectModel(Site.name) private siteModel: Model<SiteDocument>,
    @InjectConnection() private connection: Connection,
  ) { }

  async findAll(): Promise<Site[]> {
    return await this.siteModel.find().exec()
  }

  async create(input: SiteInput): Promise<Site> {
    const newSite = new this.siteModel(input)
    return await newSite.save()
  }

  async findOne(id: string) {
    return await this.siteModel.findById(id)
  }

  async update(id: string, inputs: SiteInput): Promise<Site> {
    const updateResult = await this.findOne(id)
    if(updateResult){    
      for(let oldDataKey in updateResult){
        for(let newDataKey in inputs){
          if(oldDataKey === newDataKey) updateResult[oldDataKey] = inputs[newDataKey]
        }
      }
      return await updateResult.save()
    }
    else throw new NotFoundException('Site not found.');
  }

  async findByHolder(holderId: string ): Promise<Site[]>{
    return await this.siteModel.find({holder: holderId})
  }

  async changeSiteHolder(siteId: string, newHolderId: string, newHolderName: string){
    const site = await this.siteModel.findById(siteId)
    if(!site) throw new NotFoundException('Site not found.')

    site.holderId = newHolderId
    site.holderName = newHolderName

    return await site.save()
  }
}