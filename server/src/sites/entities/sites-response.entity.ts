import { SiteEntity } from "./site.entity"
import { ObjectType, Field } from '@nestjs/graphql';



@ObjectType()
export class SitesResponse {
  @Field(() => [String], { nullable: true })
  errors?: String[]

  @Field(() => [SiteEntity], { nullable: true })
  data?: SiteEntity[]
}