import { ObjectType, Field, ID } from "@nestjs/graphql"


@ObjectType()
export class UserEntity{
  @Field(()=> ID)
  id?: string

  @Field()
  username: string

  @Field()
  password: string

  @Field()
  role: string
}