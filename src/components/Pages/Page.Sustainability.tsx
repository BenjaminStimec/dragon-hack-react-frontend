import { IconButton } from "@mui/material";
import { Settings, MonitorHeartOutlined, NearMe, MicRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DeviceSustainability from "../Sustainability/DeviceSustainability";

interface DeviceData {
        name: string,
        model_id: string,
        tip: string
}

function SustainabilityPage() {
    const [devices, setDevices] = useState<DeviceData[]>([]);

    useEffect(() => {
        const fetchDevices = async () => {
            const res = await axios.get('http://localhost:3000/broker/graphs');
            setDevices(res.data);
        }
        fetchDevices();
    }, []);
    return (
        <div className="page">
            {devices.map((device, index) =>
                <DeviceSustainability
                    key={index}
                    name={device.name}
                    model_id={device.model_id}
                    tip={device.tip}
                />
            )}
            test {React.version}
        </div>
    )
};

export default SustainabilityPage;