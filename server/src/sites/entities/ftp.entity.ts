import { Field, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Ftp{
  @Field()
  host!: string

  @Field()
  user!: string

  @Field()
  password!: string

  @Field(()=> Int, {defaultValue: 21})
  port!: number
}