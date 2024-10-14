import React, { useEffect, useState } from 'react';
import './style.css';
import { Slider } from 'antd';

const AmbientStats = () => {
    const [values, setValues] = useState({
        temp: 0,
        hum: 0,
        light: 0
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
                    temp: data.detalles.temperatura,
                    hum: data.detalles.humedad,
                    light: data.detalles.luz
                });
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchSensorData();
    }, []);

    return (
        <div id='ambientStats'>
            <h1>Temperatura: {values.temp}</h1>
            <Slider className="temp-slider" value={values.temp} disabled />
            <h1>Humedad: {values.hum}</h1>
            <Slider className="hum-slider" value={values.hum} disabled />
            <h1>Luz: {values.light}</h1>
            <Slider className="light-slider" value={values.light} disabled />
        </div>
    );
};

export default AmbientStats;
