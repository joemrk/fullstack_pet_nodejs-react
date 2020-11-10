import { IFtpAccess } from "./ftpAccess.model";
import { ISiteProviderMode } from "./siteProvider.model";


export interface ISiteModel {
  domainProvider: ISiteProviderMode  | string
  hostProvider: ISiteProviderMode  | string
  domain: string
  link: string
  ftp: IFtpAccess  | string

}

