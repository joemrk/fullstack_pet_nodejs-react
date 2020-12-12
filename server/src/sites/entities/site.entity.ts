import { ObjectType, Field, ID } from "@nestjs/graphql"
import { HosterEntity } from '../../hosters/entities/hoster.entity';

@ObjectType()
export class SiteEntity {
  @Field(() => ID)
  id: string

  @Field(()=>HosterEntity)
  domainProvider: HosterEntity

  @Field(()=>HosterEntity)
  hostProvider: HosterEntity

  @Field()
  domain: string

  @Field()
  holder: string
}