import { Resolver,Query, Mutation, Args  } from "@nestjs/graphql";
import { SiteEntity } from "./entities/site.entity";
import { SiteInput } from "./dto/site.input";
import { SitesService } from './sites.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UseGuards } from "@nestjs/common";
import { Ctx } from '../users/decorators/context.decorator';


@Resolver(SiteEntity)
@UseGuards(JwtAuthGuard)
export class SitesResolver{

  constructor(
    private readonly sitesService: SitesService
  ){}

  @Query(()=> [SiteEntity])
  async sites(@Ctx() ctx){
    // console.log(ctx.user);
    
    return await this.sitesService.findAll()
  }

  @Mutation(()=> SiteEntity)
  async createSite(
    @Args('inputs') inputs: SiteInput
    ) {
    return await this.sitesService.create(inputs)
  }

  @Query(()=> [SiteEntity])
  async getSitesByHolder(@Args('holderId') holderId: string){
    return await this.sitesService.findByHolder(holderId)
  }
}