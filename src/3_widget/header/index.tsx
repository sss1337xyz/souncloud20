import React from 'react';
import {Layout, Menu, MenuProps} from "antd";

const {Header: HeaderComponent} = Layout;

const items: MenuProps['items'] = [
    {
        label: 'My home',
        key: 1,
    },
];
const Header = () => {
    return (
        <HeaderComponent style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items} />
        </HeaderComponent>
    );
};

export default Header;