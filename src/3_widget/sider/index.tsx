import React from 'react';
import {Layout, Menu, MenuProps} from "antd";
import {Link} from "react-router-dom";

const { Sider: SiderComponent } = Layout;

const itemsSider: MenuProps['items'] = [
    {
        label:
            <Link to="/">
                Главная
            </Link>,
        key: 1,
    },
    {
        label:
            <Link to="/collection">
                Плейлист
            </Link>,
        key: 2,
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
                onClick={(e) => console.log(e.key)}
            />
        </SiderComponent>
    );
};

export default Sider;