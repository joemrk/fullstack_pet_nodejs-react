import {
  GlobalOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';




const Navbar: React.FC = (props) => {
  const ctx = useContext(AuthContext)

  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} >
        <Menu.Item key="1" icon={<GlobalOutlined />}>
          <Link to="/sites">Sites</Link>
        </Menu.Item>




        <Menu.Item key="100" icon={<LogoutOutlined />} >
          <Button
            type={'link'}
            onClick={() => ctx.logoutContext()}
          > {`${ctx.username} > Logout`}
          </Button>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
export default Navbar