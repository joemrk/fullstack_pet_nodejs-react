import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData'

type UseAuthType = {
  loginContext: (role: string, username: string) => void
  logoutContext: () => void
  username: string
  role: string
  ready: boolean
}

export const useAuth = (): UseAuthType => {
  const [role, setRole] = useState('')
  const [ready, setReady] = useState(false)
  const [username, setUsername] = useState('')

  const login = useCallback((role, username) => {
    setRole(role)
    setUsername(username)

    localStorage.setItem(storageName, JSON.stringify({
      username, role
    }))
  }, [])

  const logout = useCallback(() => {
    setUsername('')
    setRole('')

    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const localStoreUser = localStorage.getItem(storageName)
    if (localStoreUser) {
      const data = JSON.parse(localStoreUser)
      if (data && data.username) {
        login(data.role, data.username)
      }
    }
    setReady(true)
  }, [login])

  return { loginContext: login, logoutContext: logout, role, username, ready }
}