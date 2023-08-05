import React from 'react';
import {Breadcrumb, Layout} from "antd";

import Sider from "3_widget/sider";
import PlaylistTable from "5_entities/playlist/table";

import TracksPlayer from "../../3_widget/tracks_player";

const {Content} = Layout;

const Library = () => {
    return (
        <>
        <Layout>
            <Sider/>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Главная</Breadcrumb.Item>
                    <Breadcrumb.Item>Запрос</Breadcrumb.Item>
                    <Breadcrumb.Item>Альбом</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        background: "#fff",
                    }}
                >
                    <PlaylistTable/>
                </Content>
            </Layout>
        </Layout>

            <TracksPlayer/>
            </>
    );
};

export default Library;