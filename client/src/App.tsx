

import Layout from 'antd/lib/layout/layout';
import React from 'react';
import {
  BrowserRouter
} from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import { useRoutes } from './Routes';


function App() {
  const { loginContext, logoutContext, role, username, ready } = useAuth()
  const isAuthenticated = !!username
  const body = useRoutes(isAuthenticated)

  if (!ready) return <div>Loading...</div>
  return (
    <AuthContext.Provider value={{
      loginContext, logoutContext, role, username, isAuthenticated
    }}>
      <Layout>
        <BrowserRouter>
          {/* {isAuthenticated && <Navbar />} */}
          {body}
        </BrowserRouter>
      </Layout>
    </AuthContext.Provider>
  )
}

export default App;
