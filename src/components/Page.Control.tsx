import { IconButton, Input } from "@mui/material";
import { MicRounded } from "@mui/icons-material";
import React from "react";

function ControlPage(){
    return (
        <div className="page">
            <div className="talkButton">
                <IconButton size="large"><MicRounded/>Press</IconButton>
            </div>
            <Input></Input>
        </div>
    )
};

export default ControlPage;