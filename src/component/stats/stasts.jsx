import React, { useEffect, useState } from 'react';
import './style.css';
import { Slider } from 'antd';

const Stats = () => {

    const [values, setValues] = useState({
        feliz: 0,
        hambre: 0,
        triste: 0,
        sueño: 0
    });

    useEffect(() => {
        const fetchSensorData = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/sensores/ultimo');
                if (!response.ok) {
                    throw new Error('Error al obtener los datos del sensor');
                }
                const data = await response.json();
                setValues({
                    feliz: data.estado.feliz,
                    hambre: data.estado.hambre,
                    triste: data.estado.triste,
                    sueño: data.estado.sueño
                });
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchSensorData();
    }, []);


    return (
        <div id='stats'>
            <p>Feliz: {values.feliz}</p>
            <Slider className="feliz-slider" defaultValue={values.feliz} max={10} disabled />
            <p>Triste: {values.triste}</p>
            <Slider className="triste-slider" defaultValue={values.triste} max={10} disabled />
            <p>sueño: {values.calor}</p>
            <Slider className="sueño-slider" defaultValue={values.sueño} max={10} disabled />
            <p>Hambre: {values.hambre}</p>
            <Slider className="hambre-slider" value={values.hambre} max={10} disabled />

        </div>
    );
};

export default Stats