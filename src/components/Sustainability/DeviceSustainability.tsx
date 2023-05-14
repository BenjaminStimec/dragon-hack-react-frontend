import { IconButton } from "@mui/material";
import { Settings, MonitorHeartOutlined, NearMe, MicRounded } from "@mui/icons-material";
import React from "react";

interface DeviceSustainabilityProps {
    name: string,
    model_id: string,
    tip: string
}
function DeviceSustainability(props: DeviceSustainabilityProps) {
    return (

        <div className="device">
        <b className="deviceName">{props.name}</b> 
        <br/><b>UID: </b>{props.model_id}
        <br/>{props.tip} 
    </div>
    )
};

export default DeviceSustainability;