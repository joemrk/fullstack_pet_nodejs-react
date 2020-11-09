import { IFtpAccess, SiteProviderMode } from "./site.model"

export class CreateSiteDto{
  domainProvider: SiteProviderMode
  hostProvider: SiteProviderMode
  domain: string
  link: string
  ftp: IFtpAccess
}