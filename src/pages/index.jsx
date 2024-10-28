import React, { useState, useEffect } from "react";
import { Layout, Typography, Row, Col } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import AmbientStats from '../component/ambient/ambientstats';
import AccionButtons from '../component/accionBtn/accionBtn';
import Stats from '../component/stats/stasts';
import Login from "../component/login/login"
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
    const [hambre, setHambre] = useState(10);
    const [imageSrc, setImageSrc] = useState(huevo);
    const [despertado, setDespertado] = useState(false);

    const [values, setValues] = useState({
        feliz: 10,
        hambre: 10,
        triste: 0,
        sueño: 10
    });

    /*
    useEffect(() => {
        if (despertado) {
            if (hambre === 0) {
                setImageSrc(hambreimg);
            }
        }
    }, [hambre, despertado]);
*/
    useEffect(() => {
        if (despertado) {
            if (hambre === 0) {
                setImageSrc(hambreimg);
            } else if (hambre > 0 && imageSrc === hambreimg) {
                setImageSrc(home); // Cambia a la imagen de home
            }
        }
    }, [hambre, despertado, imageSrc]);

    
    const manejarDespertar = () => {
        setDespertado(true);
        setImageSrc(home);
    };

    return (
        <Layout className="layout">
            <Content className="content, background">
                {!isAuthenticated ? (
                    <Login loginWithRedirect={loginWithRedirect} />
                ) : (
                    <Row style={{ height: '100%' }}>
                        <Col span={4} className="imgIzquierda">
                            <Chart data={[values]} />
                            <img src={img} alt="Imagen izquierda" className="sider-image" />
                        </Col>
                        <Col span={16} className="middle-column">
                            <div className="topContainer">
                                <Title level={3} className="title">Kraker</Title>
                                <img src={imageSrc} alt="main" className="mainImage" />
                            </div>
                            <button id="loginbtn" onClick={() => logout({ returnTo: window.location.origin })}>Cerrar Sesión</button>
                            <div className="bottomContainer">
                                <div className="ambient-container">
                                    <AmbientStats />
                                </div>
                                <div className="buttons-container">
                                    <AccionButtons setHambre={setHambre} manejarDespertar={manejarDespertar} setImageSrc={setImageSrc} />
                                </div>
                                <div className="stats-container">
                                    <Stats setHambre={setHambre} setImageSrc={setImageSrc} values={values} setValues={setValues} />
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
