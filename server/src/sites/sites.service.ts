import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Site } from './entities/site.entity';

@Injectable()
export class SitesService {

  constructor(
    @InjectRepository(Site) private siteRepo: Repository<Site>,
    private connection: Connection
  ) { }

  async getAll(): Promise<Site[]> {
    return await this.siteRepo.find()
  }

  async getOne(id: number): Promise<Site>{
    return await this.siteRepo.findOne(id)
  }
}
