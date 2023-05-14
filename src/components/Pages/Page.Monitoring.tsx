import { IconButton } from "@mui/material";
import { Settings, MonitorHeartOutlined, NearMe, MicRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Graph from "../Graph";
import Footer from "../Footer";
import axios from "axios";
import DeviceMonitoring from "../Monitoring/DeviceMonitoring";

interface DeviceData {
    name: string;
    model_id: string;
    data: {
        name: string;
        x_axis: string;
        y_axis: string;
        data: [{ x: Date; y: number }];
    };
}

// dobimo device 
function MonitoringPage() {
    const [devices, setDevices] = useState<DeviceData[]>([]);

    useEffect(() => {
        const fetchDevices = async () => {
            const res = await axios.get('http://localhost:3000/openAI/graphs');
            setDevices(res.data);
        }
        fetchDevices();
    }, []);

    return (
        <div className="page">
            {devices.map((device, index) =>
                <DeviceMonitoring
                    key={index}
                    name={device.name}
                    model_id={device.model_id}
                    data={device.data}
                />
            )}
        </div>
    );
};

export default MonitoringPage;