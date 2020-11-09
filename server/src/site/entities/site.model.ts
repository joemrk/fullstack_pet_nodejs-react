

export interface ISiteModel {
  domainProvider: SiteProviderMode
  hostProvider: SiteProviderMode
  domain: string
  link: string
  ftp: IFtpAccess

}

export interface IFtpAccess{
  host:string
  user:string
  pass:string
  port: '21'
}


export interface SiteProviderMode{
  name: string
  link: string
  login: string
  pass: string
}