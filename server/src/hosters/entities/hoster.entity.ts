import { ObjectType, Field, ID } from "@nestjs/graphql"
import { AuthDataInput } from '../dto/auth-data.input';
import { AuthData } from '../dto/auth-data.dto';


@ObjectType()
export class Hoster{
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field(() => AuthData)
  authData: AuthData
}