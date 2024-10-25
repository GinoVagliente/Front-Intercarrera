
import { Button, message } from "antd"; // Importa message de antd para mostrar notificaciones
import './style.css';
import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import { io } from 'socket.io-client';
const AccionButtons = () => {
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
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    const aumentarHambre = () => {
        setValues(prevValues => {
            const nuevoHambre = Math.min(prevValues.hambre + 1, 10);
            socketRef.current.emit('actualizarHambre', nuevoHambre);
            return {
                ...prevValues,
                hambre: nuevoHambre
            };
        });
    };


    return (
        <div>
            <Button className="accionBtn" onClick={aumentarHambre}>Alimentar</Button>
            <Button className="accionBtn">Accion2</Button>
            <Button className="accionBtn">Accion3</Button>
        </div>
    );
}

export default AccionButtons;