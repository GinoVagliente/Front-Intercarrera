import React from 'react';
import './style.css';
import { Slider } from 'antd';

const AmbientStats = () => {

    const values = {
        temp: 30,
        hum: 7,
        light: 34
    }
    const temp = 30;
    const hum = 7;
    const light = 34;

    return (
        <div id='ambientStats'>
            <h1>Temperatura: {temp}</h1>
            <Slider className="temp-slider" defaultValue={values.temp} disabled />
            <h1>Humedad: {hum}</h1>
            <Slider className="hum-slider" defaultValue={values.hum} disabled />
            <h1>Luz: {light}</h1>
            <Slider className="light-slider" defaultValue={values.light} disabled />
        </div>
    );
};

export default AmbientStats;
