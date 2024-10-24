import React, { useEffect, useState } from 'react';
import './style.css';
import { Slider } from 'antd';
import { io } from 'socket.io-client';

const Stats = () => {

    const [values, setValues] = useState({
        feliz: 10,
        hambre: 10,
        triste: 10,
        sueño: 10
    });

    useEffect(() => {
        // Conectar al WebSocket
        const socket = io('http://localhost:4000');

        // Escuchar el evento 'estadoMascota'
        socket.on('estadoMascota', (data) => {
            console.log('Datos recibidos:', data); // Verifica los datos
            setValues({
                feliz: data.feliz,
                triste: data.triste,
                hambre: data.hambre,
                sueño: data.sueño
            });
        });

        // Limpiar la conexión al desmontar el componente
        return () => {
            socket.disconnect();
        };
    }, []);


    return (
        <div id='stats'>
            <p>Feliz:{values.feliz}</p>
            <Slider className="feliz-slider" defaultValue={values.feliz} max={10} disabled />
            <p>Triste:{values.triste}</p>
            <Slider className="triste-slider" defaultValue={values.triste} max={10} disabled />
            <p>sueño:{values.sueño}</p>
            <Slider className="sueño-slider" defaultValue={values.sueño} max={10} disabled />
            <p>Hambre:{values.hambre}</p>
            <Slider className="hambre-slider" value={values.hambre} max={10} disabled />

        </div>
    );
};

export default Stats