import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Ctx } from '../users/decorators/context.decorator';
import { SiteInput } from "./dto/site.input";
import { SiteEntity } from './entities/site.entity';
import { SitesService } from './sites.service';


@Resolver(SiteEntity)
@UseGuards(JwtAuthGuard)
export class SitesResolver {

  constructor(
    private readonly sitesService: SitesService
  ) { }

  @Query(() => [SiteEntity])
  async sites(@Ctx() ctx) {
    return await this.sitesService.findAll()
  }

  @Mutation(() => SiteEntity)
  async createSite(
    @Args('inputs') inputs: SiteInput
  ) {
   return await this.sitesService.create(inputs)
  }

  @Mutation(() => SiteEntity)
  async updateSite(
    @Args('id') id: string,
    @Args('inputs') inputs: SiteInput
  ){
    return await this.sitesService.update(id, inputs)
  }

  @Query(() => [SiteEntity])
  async getSitesByHolder(@Args('holderId') holderId: string) {
    return await this.sitesService.findByHolder(holderId)
  }

  @Query(() => SiteEntity)
  async getSiteById(
    @Args('id') id: string
  ) {
    return await this.sitesService.findOne(id)
  }
}