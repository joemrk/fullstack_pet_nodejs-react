import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type SiteDocument = Site & Document

@Schema()
export class Site{
  @Prop()
  domain: string

  @Prop()
  holder: string
}

export const SiteSchema = SchemaFactory.createForClass(Site)