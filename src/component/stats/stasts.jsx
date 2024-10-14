import React, { useEffect, useState } from 'react';
import './style.css';
import { Slider } from 'antd';

const Stats = () => {
    const [values, setValues] = useState({
        feliz: 1,
        triste: 2,
        calor: 3,
        frio: 4,
        sueño: 5,
        hambre: 6,
    });

    useEffect(() => {
        const hungerTimer = setInterval(() => {
            setValues((prevValues) => {
                if (prevValues.hambre > 0) {
                    return { ...prevValues, hambre: prevValues.hambre - 1 };
                } else {
                    clearInterval(hungerTimer); // Detenemos el timer si llega a 0
                    return prevValues; // No cambiar otros valores
                }
            });
        }, 1000); // Cada 10 segundos

        return () => clearInterval(hungerTimer); // Limpia el intervalo al desmontar el componente
    }, []);

    return (
        <div id='stats'>
            <h1>Feliz: {values.feliz}</h1>
            <Slider className="feliz-slider" defaultValue={values.feliz} max={10} disabled />
            <h1>Triste: {values.triste}</h1>
            <Slider className="triste-slider" defaultValue={values.triste} max={10} disabled />
            <h1>Calor: {values.calor}</h1>
            <Slider className="calor-slider" defaultValue={values.calor} max={10} disabled />
            <h1>Frio: {values.frio}</h1>
            <Slider className="frio-slider" defaultValue={values.frio} max={10} disabled />
            <h1>Sueño: {values.sueño}</h1>
            <Slider className="sueño-slider" defaultValue={values.sueño} max={10} disabled />
            <h1>Hambre: {values.hambre}</h1>
            <Slider className="hambre-slider" value={values.hambre} max={10} disabled />

        </div>
    );
};

export default Stats;
