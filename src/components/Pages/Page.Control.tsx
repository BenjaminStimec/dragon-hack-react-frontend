import React, { useState } from "react";
import axios from "axios";
import { IconButton, TextField } from "@mui/material";
import { MicRounded } from "@mui/icons-material";

function ControlPage() {
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [chunks, setChunks] = useState<BlobPart[]>([]);
    
    const handleClick = () => {
        if (!recording) {
            // Start recording
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(stream => {
                    const recorder = new MediaRecorder(stream);
                    setMediaRecorder(recorder);
                    recorder.start();
                    recorder.ondataavailable = e => setChunks(oldChunks => [...oldChunks, e.data]);
                    recorder.onstop = handleAudioStop;
                });
        } else {
            // Stop recording
            mediaRecorder && mediaRecorder.stop();
        }
        setRecording(!recording);
    };

    const handleAudioStop = async () => {
        const blob = new Blob(chunks, { 'type' : 'audio/wav' });
        const formData = new FormData();
        formData.append("audio", blob);

        // Send the audio data
        const res = await axios.post("http://localhost:3000/openAI/audio-upload", formData);
        
        // Send the response received to the other endpoint
        await axios.post("http://localhost:3000/openAI/string-upload", { data: res.data });
    };

    return (
        <div className="page">
            <div className="talkButton">
                <IconButton size="large" onClick={handleClick}><MicRounded />Press</IconButton>
            </div>
            //TextField directly calls "http://localhost:3000/openAI/string-upload"!
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