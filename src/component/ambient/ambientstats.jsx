import React, { useEffect, useState } from 'react';
import './style.css';
import { Slider } from 'antd';
import { io } from 'socket.io-client';

const AmbientStats = () => {
    const [values, setValues] = useState({
        temp: 0,
        hum: 0,
        light: 0
    });

    useEffect(() => {
        // Conectar al WebSocket
        const socket = io('http://localhost:4000');

        // Escuchar el evento 'estadoMascota'
        socket.on('datosAguardar', (data) => {
            console.log('Datos recibidos:', data); // Verifica los datos
            setValues({
                temp: data.detalles.temperatura,
                hum: data.detalles.humedad,
                light: data.detalles.luz
            });
        });

        // Limpiar la conexión al desmontar el componente
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div id='ambientStats'>
            <p>Temperatura: {values.temp}</p>
            <Slider className="temp-slider" value={values.temp} disabled />
            <p>Humedad: {values.hum}</p>
            <Slider className="hum-slider" value={values.hum} disabled />
            <p>Luz: {values.light}</p>
            <Slider className="light-slider" value={values.light} disabled />
        </div>
    );
};

export default AmbientStats;
