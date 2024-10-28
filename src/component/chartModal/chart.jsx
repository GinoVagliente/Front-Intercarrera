import React, { useState } from "react";
import { Button, Modal } from "antd";
import './style.css'
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { LineChart, Line } from 'recharts';
import { BarChart, Bar } from 'recharts';

const Chart = ({ data }) => {
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
                Sensores
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
                
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" tickFormatter={(time) => new Date(time).toLocaleTimeString()} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="temperatura" stroke="#8884d8" />
                        <Line type="monotone" dataKey="hambre" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="sueño" stroke="#ffc658" />
                        <Line type="monotone" dataKey="feliz" stroke="#ff7300" />
                        <Line type="monotone" dataKey="triste" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="feliz" fill="#8884d8" />
                        <Bar dataKey="triste" fill="#82ca9d" />
                        <Bar dataKey="sueño" fill="#82ca9d" />
                        <Bar dataKey="hambre" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                <Button type="primary" onClick={handleOk}>
                    Aceptar
                </Button>
            </Modal>
        </div>
    );
}

export default Chart;
