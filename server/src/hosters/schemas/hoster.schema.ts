import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type HosterDocument = Hoster & Document

@Schema()
export class Hoster{
  
  @Prop()
  name: string

  @Prop()
  url: string
}

export const HosterSchema = SchemaFactory.createForClass(Hoster)