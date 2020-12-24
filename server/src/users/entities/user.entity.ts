import { ObjectType, Field, ID } from "@nestjs/graphql"


@ObjectType()
export class UserEntity{
  @Field(()=> ID)
  readonly id?: string

  @Field()
  readonly username: string

  @Field()
  readonly password: string

  @Field()
  readonly role: string

  @Field()
  readonly yandexLogin: string

  @Field()
  readonly telegram: string
}