import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongoSchema } from 'mongoose';

export type SiteDocument = Site & Document

@Schema()
export class Site{
  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'Hoster'})
  domainProviderId: MongoSchema.Types.ObjectId
  
  @Prop()
  domainProviderName: MongoSchema.Types.ObjectId
  
  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'Hoster'})
  hostProviderId: MongoSchema.Types.ObjectId
  
  @Prop()
  hostProviderName: MongoSchema.Types.ObjectId

  @Prop()
  domain: string

  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'User'})
  holderId: MongoSchema.Types.ObjectId

  @Prop()
  holderName: string

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const SiteSchema = SchemaFactory.createForClass(Site)