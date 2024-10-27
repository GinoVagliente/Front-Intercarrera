import { Button } from "antd";
import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import './style.css';

const AccionButtons = ({ setHambre, manejarDespertar, setImageSrc }) => {
    const socketRef = useRef(null);
    const [values, setValues] = useState({
        feliz: 10,
        hambre: 10,
        triste: 10,
        sueño: 10
    });

    const [despertado, setDespertado] = useState(false);
    const [muerte, setMuerte] = useState(false);

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

        socketRef.current.on('humorEstado', (data) => {
            console.log('Estados de humor recibidos:', data);
            if (data.triste === 10 && data.feliz === 0) {
                setMuerte(true);
            }
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    const aumentarHambre = () => {
        setValues(prevValues => {
            const nuevoHambre = Math.min(prevValues.hambre + 1, 10);
            socketRef.current.emit('actualizarHambre', nuevoHambre);
            setHambre(nuevoHambre);
            setImageSrc(require('../../images/home.gif'));
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

    const disminuirSueño = () => {
        socketRef.current.emit('actualizarSueño', 0);
        setImageSrc(require('../../images/dormir.gif'));
        setTimeout(() => {
            setValues(prevValues => {
                const hambreActual = prevValues.hambre;
                if (hambreActual === 0) {
                    setImageSrc(require('../../images/hambre.gif'));
                } else {
                    setImageSrc(require('../../images/home.gif'));
                }
                return prevValues;
            });
        }, 6000);
    };

    return (
        <div>
            <Button className="accionBtn" onClick={aumentarHambre} disabled={muerte}>Alimentar</Button>
            <Button className="accionBtn" onClick={manejarDespertarClick} disabled={despertado || muerte}>Despertar</Button>
            <Button className="accionBtn" onClick={disminuirSueño} disabled={muerte}>Dormir</Button>
        </div>
    );
}

export default AccionButtons;
