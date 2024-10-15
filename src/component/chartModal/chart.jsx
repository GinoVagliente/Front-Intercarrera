import React, { useState } from "react";
import { Button, Modal } from "antd";
import './style.css'
const Chart = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="chart-container">
            <Button onClick={showModal} className="chart-button">
                Show Chart
            </Button>
            <Modal
                title={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Datos de Sensores</span>
                    </div>
                }
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <p>Contenido del gráfico o datos de sensores aquí.</p>
                <Button type="primary" onClick={handleOk}>
                    Aceptar
                </Button>
            </Modal>
        </div>
    );
}

export default Chart;
