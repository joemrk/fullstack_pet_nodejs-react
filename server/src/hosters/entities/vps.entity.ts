import { Field, ObjectType } from "@nestjs/graphql"


@ObjectType()
export class Vps {
  @Field()
  ip: string

  @Field()
  login: string

  @Field()
  pass: string 

  @Field()
  panelName: string

  @Field()
  panelUrl: string
}