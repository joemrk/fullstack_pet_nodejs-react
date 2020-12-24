import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { UserRole } from "../enums/user-roles.enum";



export type UserDocument = User & Document

@Schema()
export class User {
  @Prop({unique: true, required: true})
  username: string

  @Prop({ required: true})
  password: string

  @Prop({type: UserRole, enum: UserRole, default: UserRole.Default})
  role: string

  @Prop({ default: ''})
  yandexLogin: string

  @Prop({ default: ''})
  telegram: string
}

export const UserSchema = SchemaFactory.createForClass(User)