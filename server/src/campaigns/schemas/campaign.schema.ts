import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CampaignDocument = Campaign & Document
 

@Schema()
export class Campaign {
  @Prop()
  langue: string

  @Prop()
  campaignName: string

  @Prop()
  fullCampaignName: string

}

export const CampaignSchema = SchemaFactory.createForClass(Campaign)
