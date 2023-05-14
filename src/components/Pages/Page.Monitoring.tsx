import { IconButton } from "@mui/material";
import { Settings, MonitorHeartOutlined, NearMe, MicRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Graph from "../Monitoring/Graph";
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
            const res = await axios.get('http://localhost:3000/openAI/get-graphs');
            setDevices(res.data);
            /*
            var test: DeviceData[] = []
            for(var i = 0; i<100; i++) test.push({name:"test "+i,model_id:"id",data:{name:"ff",x_axis:"0",y_axis:"0",data:[{x:new Date(),y:0}]}})
            setDevices(test)*/
            
        }
        fetchDevices();

    }, []);

    return (
        <div className="page">
            <div className="devices">
                {devices.map((device, index) =>
                    <DeviceMonitoring
                        key={index}
                        name={device.name}
                        model_id={device.model_id}
                        data={device.data}
                    />
                )}
            </div>
        </div>
    );
};

export default MonitoringPage;