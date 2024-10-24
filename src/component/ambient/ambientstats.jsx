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

        const socket = io('http://localhost:4000'); // Cambia el puerto según tu configuración
        
        socket.on('estadoMascota', (estadoMascota) => {
            console.log('Estado de la mascota recibido:', estadoMascota);
            // Aquí puedes actualizar tu UI con el estado recibido
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
