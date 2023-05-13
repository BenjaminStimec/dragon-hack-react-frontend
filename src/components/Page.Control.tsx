import { IconButton, TextField } from "@mui/material";
import { MicRounded } from "@mui/icons-material";
import React from "react";
import Footer from "./Footer";

function ControlPage(){
    return (
        
        <div className="page">
            <div className="talkButton">
                <IconButton size="large"><MicRounded/>Press</IconButton>
            </div>
            <TextField
          id="outlined-multiline-flexible"
          label="Type what you want to do"
          multiline
          maxRows={8}
        />
        </div>
       

    )
};

export default ControlPage;