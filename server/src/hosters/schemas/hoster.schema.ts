import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { AuthDataInput } from '../dto/auth-data.input';


export type HosterDocument = Hoster & Document

@Schema()
export class Hoster{
  
  @Prop()
  name: string

  @Prop({type: AuthDataInput})
  authData: AuthDataInput
}

export const HosterSchema = SchemaFactory.createForClass(Hoster)