import { IFtpAccess } from "../interfaces/ftpAccess.model"
import { ISiteProviderMode } from "../interfaces/siteProvider.model"

export class CreateSiteDto{
  domainProvider: ISiteProviderMode | string
  hostProvider: ISiteProviderMode  | string
  domain: string
  link: string
  ftp: IFtpAccess  | string
}