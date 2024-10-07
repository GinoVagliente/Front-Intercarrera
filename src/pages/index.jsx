import React from "react";
import { Layout, Typography } from 'antd';
import AmbientStats from '../component/ambient/ambientstats';
import AccionButtons from '../component/accionBtn/accionBtn';
import Stats from '../component/stats/stasts'
import './style.css';
const { Title } = Typography;
const {Content, Sider } = Layout;

const Index = () => {
    return (
        <Layout className="layout">
            <Layout>
                <Sider width={300} className="sider">
                    <div className="bothSiders">
                        <AmbientStats />
                    </div>
                </Sider>
                <Layout>
                    <Content className="content">
                        <Title level={3} className="title">Nombre</Title>
                        <div className="btns-container">
                            <AccionButtons className="btns" />
                        </div>
                    </Content>
                </Layout>
                <Sider width={300} className="sider">
                <div className="bothSiders">
                <Stats></Stats>
                    </div>
                </Sider>
            </Layout>
        </Layout>
    );
};

export default Index;
