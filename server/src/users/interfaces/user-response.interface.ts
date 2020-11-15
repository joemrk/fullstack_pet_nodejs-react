import { IUser } from "./user.interface";


export interface IUserResponse{
  user?: IUser
  error?: string
}