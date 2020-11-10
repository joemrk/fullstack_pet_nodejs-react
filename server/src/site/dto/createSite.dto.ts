import { IFtpAccess } from "../interfaces/ftpAccess.model"
import { ISiteProviderMode } from "../interfaces/siteProvider.model"
import {IsString} from 'class-validator'

export class CreateSiteDto{
  @IsString()
  domainProvider: ISiteProviderMode | string

  @IsString()
  hostProvider: ISiteProviderMode  | string

  @IsString()
  domain: string

  @IsString()
  link: string

  @IsString()
  ftp: IFtpAccess  | string
}