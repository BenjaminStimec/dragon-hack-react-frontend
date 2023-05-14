import { IconButton } from "@mui/material";
import {Settings, MonitorHeartOutlined, NearMe, MicRounded} from "@mui/icons-material";
import React from "react";

interface DeviceGraphProps{
    data:{name:string, x_axis:string, y_axis:string, data:[{x:Date, y:number}]};
}
function DeviceGraph(props: DeviceGraphProps){

    return (
        
        <div className="">
            
        </div>
    )
};

export default DeviceGraph;