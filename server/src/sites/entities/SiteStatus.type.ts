

export type SiteStatus = 'active' | 'deleted' | 'creating' | 'waitint for deletion'

export enum SiteStatusEnum{
  Creating = 0,
  Free = 1,
  Active = 2,
  WaitingForDeletion = 3,
  Deleted = 4
}