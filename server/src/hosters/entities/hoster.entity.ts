import { ObjectType, Field, ID } from "@nestjs/graphql"
import { AuthDataInput } from '../dto/auth-data.input';
import { AuthData } from '../dto/auth-data.dto';
import { SiteEntity } from '../../sites/entities/site.entity';


@ObjectType()
export class HosterEntity{
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field(() => AuthData)
  authData: AuthData

  @Field(() =>[SiteEntity])
  sites: SiteEntity[]

}