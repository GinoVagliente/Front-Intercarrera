import { Button } from "antd"; 
import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import './style.css';

const AccionButtons = ({ setHambre, manejarDespertar,setImageSrc  }) => {
    const socketRef = useRef(null);
    const [values, setValues] = useState({
        feliz: 10,
        hambre: 10,
        triste: 10,
        sueño: 10
    });

    const [despertado, setDespertado] = useState(false);

    useEffect(() => {
        socketRef.current = io('http://localhost:4000');
        socketRef.current.on('hambreEstado', (data) => {
            console.log('Estado de hambre recibido:', data);
            setValues(prevValues => ({
                ...prevValues,
                hambre: data.hambre
            }));
            setHambre(data.hambre); // Actualiza el estado de hambre en Index
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    const aumentarHambre = () => {
        setValues(prevValues => {
            const nuevoHambre = Math.min(prevValues.hambre + 1, 10);
            socketRef.current.emit('actualizarHambre', nuevoHambre);
            setHambre(nuevoHambre); // Actualiza el estado de hambre en Index
            setImageSrc(require('../../images/home.gif')); // Regresa a la imagen principal después de 3 segundos
            return {
                ...prevValues,
                hambre: nuevoHambre
            };
        });
    };

    const manejarDespertarClick = () => {
        manejarDespertar();
        setDespertado(true);
    };

    const diminuirSueño= () => {
        socketRef.current.emit('actualizarSueño', 0);
            setImageSrc(require('../../images/dormir.gif')); // Cambia a la imagen de dormir
            setTimeout(() => {
                setImageSrc(require('../../images/home.gif')); // Regresa a la imagen principal después de 3 segundos
            }, 6000);
    };

    return (
        <div>
            <Button className="accionBtn" onClick={aumentarHambre}>Alimentar</Button>
            <Button className="accionBtn" onClick={manejarDespertarClick} disabled={despertado}>Despertar</Button>
            <Button className="accionBtn" onClick={diminuirSueño}>Dormir</Button>
        </div>
    );
}

export default AccionButtons;
