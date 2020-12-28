import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from "./pages/auth/Auth";
import Sites from "./pages/sites/Sites";
import Layout, { Content } from 'antd/lib/layout/layout';
import Navbar from './Components/Navbar';
import AfterAuth from './pages/auth/AfterAuth';
import Hosters from './pages/hosters/Hosters';
import CreateHoster from "./pages/hosters/CreateHoster";
import CreateSite from "./pages/sites/CreateSite";
import Campaigns from "./pages/campaigns/Campaigns";
import CreateCampaign from "./pages/campaigns/CreateCampaign";
import Users from './pages/users/Users';
import CreateUser from './pages/users/CreateUser';
import EditSite from "./pages/sites/EditSite";

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
                <Route path="/sites/create" exact>
                  <CreateSite />
                </Route> 
                <Route path="/sites/edit" exact>
                  <EditSite />
                </Route>

                <Route path="/hosters" exact>
                  <Hosters />
                </Route>
                <Route path="/hosters/create" exact>
                  <CreateHoster />
                </Route>
                <Route path="/campaigns" exact>
                  <Campaigns />
                </Route>
                <Route path="/campaigns/create" exact>
                  <CreateCampaign />
                </Route>
                <Route path="/users" exact>
                  <Users />
                </Route>
                <Route path="/users/create" exact>
                  <CreateUser />
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