import React, { useState, useEffect } from "react";
import { Layout, Typography, Row, Col } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import AmbientStats from '../component/ambient/ambientstats';
import AccionButtons from '../component/accionBtn/accionBtn';
import Stats from '../component/stats/stasts';
import './style.css';
import img from '../images/leftSide.png';
import img2 from '../images/rightSide.png';
import home from '../images/home.gif';
import hambreimg from '../images/hambre.gif';
import Chart from '../component/chartModal/chart';
import huevo from '../images/huevo.gif';

const { Title } = Typography;
const { Content } = Layout;

const Index = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const [hambre, setHambre] = useState(10); // Estado para el hambre
    const [imageSrc, setImageSrc] = useState(huevo);
    const [despertado, setDespertado] = useState(false);

    useEffect(() => {
        if (despertado) {
            if (hambre === 0) {
                setImageSrc(hambreimg);
            } else {
                setImageSrc(home);
            }
        }
    }, [hambre, despertado]);

    const manejarDespertar = () => {
        setDespertado(true);
        setImageSrc(home);
    };

    return (
        <Layout className="layout">
            <Content className="content">
                {!isAuthenticated ? (
                    <div className="auth-container">
                        <Title level={3}>Bienvenido a Kraker</Title>
                        <p>Por favor, inicia sesión para acceder a la aplicación.</p>
                        <button onClick={() => loginWithRedirect()}>Iniciar Sesión</button>
                    </div>
                ) : (
                    <Row style={{ height: '100%' }}>
                        <Col span={4} className="imgIzquierda">
                            <Chart />
                            <img src={img} alt="Imagen izquierda" className="sider-image" />
                        </Col>
                        <Col span={16} className="middle-column">
                            <div className="topContainer">
                                <Title level={3} className="title">Kraker</Title>
                                <img src={imageSrc} alt="main" className="mainImage" />
                            </div>
                            <button onClick={() => logout({ returnTo: window.location.origin })}>Cerrar Sesión</button>
                            <div className="bottomContainer">
                                <div className="ambient-container">
                                    <AmbientStats />
                                </div>
                                <div className="buttons-container">
                                    <AccionButtons setHambre={setHambre} manejarDespertar={manejarDespertar} />
                                </div>
                                <div className="stats-container">
                                    <Stats setHambre={setHambre} />
                                </div>
                            </div>
                        </Col>
                        <Col span={4} className="imgDerecha">
                            <img src={img2} alt="Imagen derecha" className="sider-image" />
                        </Col>
                    </Row>
                )}
            </Content>
        </Layout>
    );
};

export default Index;
