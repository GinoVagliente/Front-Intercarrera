import React from 'react';
import './style.css';
import { Slider } from 'antd';

const Stats = () => {
    const values = {
        feliz: 1,
        triste: 2,
        calor: 3,
        frio: 4,
        sueño: 5,
        hambre: 6,
    };

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
            <Slider className="hambre-slider" defaultValue={values.hambre} max={10} disabled />
        </div>
    );
};

export default Stats;
