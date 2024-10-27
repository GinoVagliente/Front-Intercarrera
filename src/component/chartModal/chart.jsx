import React, { useState } from "react";
import { Button, Modal } from "antd";
import './style.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const Chart = ({data}) => {
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
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div style={{ width: '100%', height: 300 }}>
                    <AreaChart width={500} height={300} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Area dataKey="value" fill="#8884d8" />
                    </AreaChart>
                </div>
                
                <Button type="primary" onClick={handleOk}>
                    Aceptar
                </Button>
            </Modal>
        </div>
    );
}

export default Chart;
