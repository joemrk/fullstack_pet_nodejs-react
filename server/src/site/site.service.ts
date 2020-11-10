import { Injectable } from '@nestjs/common';
import { ISiteModel } from './interfaces/site.model';

@Injectable()
export class SiteService {

  private readonly sites: ISiteModel[] = []

  create(site: ISiteModel){
    this.sites.push(site)
  }

  sitesList(){
    return this.sites
  }

  site(id: number){
    return this.sites[id]
  }

}
