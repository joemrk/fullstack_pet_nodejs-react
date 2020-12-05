import { Document } from "mongoose";


export interface Site extends Document{
  readonly domain: string
  readonly holder: string
}
