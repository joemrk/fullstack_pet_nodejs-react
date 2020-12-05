import { Field, ObjectType } from "@nestjs/graphql"
import { UserEntity } from "./user.entity"

@ObjectType()
export class UserResponse {
  @Field(() => [String], { nullable: true })
  errors?: String[]

  @Field(() => UserEntity, { nullable: true })
  user?: UserEntity
}