import React from 'react';
import Header from "widget/header";
import {Layout} from "antd";
import Sider from "widget/sider";
import {Outlet} from "react-router-dom";

const RouterLayout = () => {
    return (
        <Layout>
            <Header/>
            <Layout>
                <Sider/>
                <Outlet/>
            </Layout>
        </Layout>
    );
};

export default RouterLayout;