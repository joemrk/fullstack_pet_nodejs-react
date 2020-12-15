import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { AuthData } from '../dto/auth-data.dto';


@ObjectType()
export class HosterEntity {
  @Field(() => ID)
  readonly id: string

  @Field()
  readonly name: string

  @Field()
  readonly siteLink: string

  @Field(() => AuthData)
  readonly authData: AuthData

  @Field(() => Int)
  readonly sitesCount: number

}