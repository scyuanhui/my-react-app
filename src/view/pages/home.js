import React, { useState } from 'react';
import { Layout, Menu, Popover, Avatar } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import "./../../style/home.scss";
import HomeRouter from "./../../router/homeRouter";
import { useSelector } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default function Home(props) {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  };
  const reduxProps = useSelector(
    ({ userInfoReducer: { userInfo } }) => {
      return {
        userInfo
      }
    }
  );
  const { userInfo } = reduxProps;
  const systemExit = () => {
    props.history.push("/login");
    sessionStorage.clear();
  }
  return (
    <Layout style={{ minHeight: '100%' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className="yh-main-sider">
        {collapsed ? null : <div className="yh-sider-title">
          XXX平台
        </div>
        }
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
            </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
            </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="yh-site-layout">
        <Header className="yh-site-layout-header" id="yh-layout-header">
          <Popover
            className="yh-user-popover"
            getPopupContainer={() => document.getElementById("yh-layout-header")}
            content={
              <>
                {/* <div>
                  账户设置
                </div>
                <div>重置密码</div> */}
                <div onClick={systemExit}>安全退出</div>
              </>
            }
          >
            <span>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </span>
            <span>
              {userInfo?.userName}
            </span>
          </Popover>
        </Header>
        <Content className="yh-layout-content">
          <div>
            <HomeRouter />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
