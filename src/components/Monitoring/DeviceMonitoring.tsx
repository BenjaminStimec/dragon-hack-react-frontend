import { IconButton } from "@mui/material";
import { Settings, MonitorHeartOutlined, NearMe, MicRounded } from "@mui/icons-material";
import React from "react";
import DeviceGraph from "./DeviceGraph";

interface DeviceMonitoringProps {
    name: string,
    model_id: string,
    data: { name: string, x_axis: string, y_axis: string, data: [{ x: Date, y: number }] };
}
function DeviceMontioring(props: DeviceMonitoringProps) {
    return (

        <div className="device">
            <b className="deviceName">{props.name}</b> 
            <br/><b>UID: </b>{props.model_id}
            <br/><DeviceGraph data={props.data} />
        </div>
    )
};

export default DeviceMontioring;