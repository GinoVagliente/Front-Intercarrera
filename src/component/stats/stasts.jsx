import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import { Slider } from 'antd';
import { io } from 'socket.io-client';

const Stats = ({ setHambre, setImageSrc }) => {
    const socketRef = useRef(null);
    const [values, setValues] = useState({
        feliz: 10,
        hambre: 10,
        triste: 0,
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
            setHambre(data.hambre);
        });

        socketRef.current.on('SueñoEstado', (data) => {
            console.log('Estado de sueño recibido:', data);
            setValues(prevValues => ({
                ...prevValues,
                sueño: data.sueño
            }));
        });

        socketRef.current.on('estadoMascota', (data) => {
            console.log('Estado de mascota recibido:', data);
            const nuevoFeliz = data.feliz === 1 ? 10 : 0;
            const nuevoTriste = data.triste === 1 ? 10 : 0;

            setValues(prevValues => ({
                ...prevValues,
                feliz: nuevoFeliz,
                triste: nuevoTriste,
            }));
        });

        socketRef.current.on('humorEstado', (data) => {
            console.log('Estados de humor recibidos:', data);
            const nuevoFeliz = data.feliz;
            const nuevoTriste = data.triste;
            setValues(prevValues => ({
                ...prevValues,
                feliz: nuevoFeliz,
                triste: nuevoTriste,
            }));
            // Cambiar imagen si triste = 10 y feliz = 0
            if (nuevoTriste === 10 && nuevoFeliz === 0) {
                setImageSrc(require('../../images/muerte.gif')); // Cambia a la imagen de muerte
            }
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, [setHambre, setImageSrc]);

    return (
        <div id='stats'>
            <p>Feliz: {values.feliz}</p>
            <Slider className="feliz-slider" value={values.feliz} max={10} disabled />
            <p>Triste: {values.triste}</p>
            <Slider className="triste-slider" value={values.triste} max={10} disabled />
            <p>Sueño: {values.sueño}</p>
            <Slider className="sueño-slider" value={values.sueño} max={10} disabled />
            <p>Hambre: {values.hambre}</p>
            <Slider className="hambre-slider" value={values.hambre} max={10} disabled />
        </div>
    );
};

export default Stats;
