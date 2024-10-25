import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import { Slider } from 'antd';
import { io } from 'socket.io-client';

const Stats = ({ setHambre }) => {
    const socketRef = useRef(null);
    const [values, setValues] = useState({
        feliz: 10,
        hambre: 10,
        triste: 10,
        sueño: 10
    });

    useEffect(() => {
        socketRef.current = io('http://localhost:4000');

        socketRef.current.on('hambreEstado', (data) => {
            console.log('Estado de hambre recibido:', data);
            setValues(prevValues => ({
                ...prevValues,
                hambre: data.hambre
            }));
            setHambre(data.hambre); // Actualiza el hambre en el componente padre
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, [setHambre]);

    return (
        <div id='stats'>
            <p>Feliz: {values.feliz}</p>
            <Slider className="feliz-slider" defaultValue={values.feliz} max={10} disabled />
            <p>Triste: {values.triste}</p>
            <Slider className="triste-slider" defaultValue={values.triste} max={10} disabled />
            <p>Sueño: {values.sueño}</p>
            <Slider className="sueño-slider" defaultValue={values.sueño} max={10} disabled />
            <p>Hambre: {values.hambre}</p>
            <Slider className="hambre-slider" value={values.hambre} max={10} disabled />
        </div>
    );
};

export default Stats;
