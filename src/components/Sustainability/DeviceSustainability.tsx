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

        <div className="page">
            //name + model_id display!
            //tip display!
        </div>
    )
};

export default DeviceSustainability;