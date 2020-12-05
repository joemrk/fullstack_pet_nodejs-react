import {createContext} from 'react'

interface IAuthContext{
  loginContext: (role: string, username: string) => void
  logoutContext: () => void
  username: string | null
  role: string | null
  isAuthenticated: boolean
}

export const AuthContext = createContext({} as IAuthContext)