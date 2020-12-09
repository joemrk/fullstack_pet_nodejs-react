import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { HosterInput } from './dto/hoster.input';
import { Hoster, HosterDocument } from './schemas/hoster.schema';

@Injectable()
export class HostersService {

  constructor(
    @InjectModel(Hoster.name) private hosterModel: Model<HosterDocument>,
    @InjectConnection() private connection: Connection,
  ) { }

  async create(createHosterInput: HosterInput) {
    const newHoster = new this.hosterModel(createHosterInput)
    return await newHoster.save()
  }

  async findAll() {
    return await this.hosterModel.find().exec()
  }

  async findOne(id: string) {
    return await this.hosterModel.findById(id)
    // return `This action returns a #${id} hoster`;
  }

  update(id: number, updateHosterInput: HosterInput) {
    return `This action updates a #${id} hoster`;
  }

  remove(id: number) {
    return `This action removes a #${id} hoster`;
  }
}
