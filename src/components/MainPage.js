import React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import MainContent from "./MainContent";

const { Header, Content, Footer } = Layout;

const MainPage = (props) => {
    return (
        <Layout className="layout" style={{ height: '100vh' }}>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content" style={{ margin: '32px 0', width: '50vh', minWidth: '400px'}} >
                    <MainContent/>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
};

export default MainPage;