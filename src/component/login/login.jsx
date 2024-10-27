import React from 'react';
import silueta from '../../images/silueta.png';
import { Typography } from 'antd';
import './style.css';

const { Title } = Typography;

const Login = ({ loginWithRedirect }) => {
    return (
        <div className="auth-container">
            <img src={silueta} alt="silueta" className="silueta" />
            <div className="intro">
                <Title level={3}>Bienvenido a Kraker</Title>
                <p>Por favor, inicia sesión para acceder a la aplicación.</p>
                <button id="loginbtn" onClick={() => loginWithRedirect()}>Iniciar Sesión</button>
            </div>
        </div>
    );
};

export default Login;
