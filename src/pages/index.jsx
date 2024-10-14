import React from "react";
import { Layout, Typography, Row, Col } from 'antd';
import AmbientStats from '../component/ambient/ambientstats';
import AccionButtons from '../component/accionBtn/accionBtn';
import Stats from '../component/stats/stasts';
import './style.css';
import img from './leftSide.png';
import img2 from './rightSide.png';

const { Title } = Typography;
const { Content } = Layout;

const Index = () => {
    return (
        <Layout className="layout">
            <Content className="content">
                <Row style={{ height: '100%' }}>
                    <Col className="imgIzquierda" flex="none">
                        <img src={img} alt="Imagen izquierda" className="sider-image" />
                    </Col>
                    <Col className="middle-column" flex="1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div className="topContainer">
                            <Title level={3} className="title">Nombre</Title>
                            <img src={img} alt="Imagen izquierda" className="sider-image" width={100} height={300}/>
                        </div>
                        <div className="bottomContainer">
                            <div className="ambient-container">
                                <AmbientStats />
                            </div>
                            <div className="buttons-container">
                                <AccionButtons className="btns" />
                            </div>
                            <div className="stats-container">
                                <Stats />
                            </div>
                        </div>
                    </Col>
                    <Col className="imgDerecha" flex="none">
                        <img src={img2} alt="Imagen derecha" className="sider-image"/>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Index;
