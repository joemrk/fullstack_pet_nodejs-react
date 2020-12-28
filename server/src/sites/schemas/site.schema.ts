import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongoSchema } from 'mongoose';

export type SiteDocument = Site & Document

@Schema()
export class Site{
  // @Prop({ type: MongoSchema.Types.ObjectId, ref: 'Hoster', required: true})
  @Prop({required: true})
  domainProviderId: string
  
  @Prop({required: true})
  domainProviderName:string
  
  // @Prop({ type: MongoSchema.Types.ObjectId, ref: 'Hoster', required: true})
  @Prop({required: true})
  hostProviderId: string
  
  @Prop({required: true})
  hostProviderName: string

  // @Prop({ type: MongoSchema.Types.ObjectId, ref: 'Hoster', required: true})
  @Prop({required: true})
  campaignId: string
  
  @Prop({required: true})
  campaignName: string

  @Prop({required: true})
  domain: string

  @Prop()
  dedicatedIp: string

  @Prop()
  yandexId: string

  // @Prop({ type: MongoSchema.Types.ObjectId, ref: 'User', default: '5fe79384e01a0249086e5226', required: true})
  @Prop({default: '5fe79384e01a0249086e5226'})
  holderId: string

  @Prop({default: 'free'})
  holderName: string

  @Prop({ default: Date.now, required: false })
  createdAt: Date;

}

export const SiteSchema = SchemaFactory.createForClass(Site)