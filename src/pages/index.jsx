import React from "react";
import { Layout, Typography, Row, Col } from 'antd';
import AmbientStats from '../component/ambient/ambientstats';
import AccionButtons from '../component/accionBtn/accionBtn';
import Stats from '../component/stats/stasts';
import './style.css';
import img from '../images/leftSide.png';
import img2 from '../images/rightSide.png';
import home from '../images/home.gif';
import Chart from '../component/chartModal/chart';

const { Title } = Typography;
const { Content } = Layout;

const Index = () => {
    return (
        <Layout className="layout">
            <Content className="content">
                <Row style={{ height: '100%' }}>
                    <Col span={4} className="imgIzquierda"> {/* 20% */}
                        <Chart />
                        <img src={img} alt="Imagen izquierda" className="sider-image" />
                    </Col>
                    <Col span={16} className="middle-column"> {/* 60% */}
                        <div className="topContainer">
                            <Title level={3} className="title">Kraker</Title>
                            <img src={home} alt="main" className="mainImage"/>
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
                    <Col span={4} className="imgDerecha"> {/* 20% */}
                        <img src={img2} alt="Imagen derecha" className="sider-image" />
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Index;
