import { IconButton, Input } from "@mui/material";
import { MicRounded } from "@mui/icons-material";
import React from "react";
import Footer from "./Footer";

function ControlPage(){
    return (
        <div>
        <div className="page">
            <div className="talkButton">
                <IconButton size="large"><MicRounded/>Press</IconButton>
            </div>
            <Input></Input>
        </div>
        </div>

    )
};

export default ControlPage;