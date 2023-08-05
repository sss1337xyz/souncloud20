import React from 'react';
import {Layout, Menu, MenuProps} from "antd";

const { Sider: SiderComponent } = Layout;

const itemsSider: MenuProps['items'] = [
    {
        label: 'Library',
        key: 1,
    },
];
const Sider = () => {
    return (
        <SiderComponent width={200} style={{ background: "#fff" }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={itemsSider}
            />
        </SiderComponent>
    );
};

export default Sider;