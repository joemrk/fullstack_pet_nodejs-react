import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { Site } from "./entities/site.entity";
import { SitesService } from "./sites.service";

@Resolver(Site)
export class SitesResolver {
  constructor(
    private sitesService: SitesService
  ) { }


  @Query(() => Site)
  async sites(): Promise<Site[]> {
    return await this.sitesService.getAll()
  }

  @Query(() => Site)
  async site(@Args('id', {type: ()=> Int}) id: number): Promise<Site> {
    return await this.sitesService.getOne(id)
  }

  // @ResolveField()
  // async allOfHolder(@Parent() holder: User) {
  //   const { id } = holder;
  //   return this.sitesService.getAll({ holderId: id });
  // }


}