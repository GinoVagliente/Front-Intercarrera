import React from "react";
import { Button, message } from "antd"; // Importa message de antd para mostrar notificaciones
import './style.css';

const AccionButtons = () => {
    const manejarAlimentar = () => {
        fetch('http://localhost:4000/api/accion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la alimentación');
            }
            return response.json();
        })
        .then(data => {
            message.success(data.message); // Muestra un mensaje de éxito
        })
        .catch(error => {
            message.error('Error: ' + error.message); // Muestra un mensaje de error
        });
    };

    return (
        <div>
            <Button className="accionBtn" onClick={manejarAlimentar}>Alimentar</Button>
            <Button className="accionBtn">Accion2</Button>
            <Button className="accionBtn">Accion3</Button>
        </div>
    );
}

export default AccionButtons;