import React from "react";
import { Button } from "antd";
import './style.css';

const AccionButtons = () => {
    return (
        <div>
            <Button className="accionBtn">Accion1</Button>
            <Button className="accionBtn">Accion2</Button>
            <Button className="accionBtn">Accion3</Button>
        </div>
    );
}

export default AccionButtons;
