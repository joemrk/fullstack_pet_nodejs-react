import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from "./pages/auth/Auth";
import Sites from "./pages/sites/Sites";
import Layout, { Content } from 'antd/lib/layout/layout';
import Navbar from './Components/Navbar';
import AfterAuth from './pages/auth/AfterAuth';

export const useRoutes = (isAuth: boolean) => {
  if (isAuth) {
    return (
      <>
        <Navbar />
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial', minHeight: '100vh' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Switch>
                <Route path="/sites" exact>
                  <Sites />
                </Route>

                <Redirect to="/sites" />
              </Switch>
            </div>
          </Content>
        </Layout>
      </>
    )
  }
  return (
    <Switch>
      <Route path="/auth" exact>
        <Auth />
      </Route>
      <Route path="/afterauth" exact>
        <AfterAuth />
      </Route>
      <Redirect to="/auth" />
    </Switch>
  )
}