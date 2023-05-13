import { IconButton } from "@mui/material";
import {Settings, MonitorHeartOutlined, NearMe, MicRounded} from "@mui/icons-material";
import React from "react";
import LoginButton from "./LoginButton";

function SetPage(){
    return (
        <div className="page">
        {<LoginButton/>}
        </div>
    )
};

export default SetPage;