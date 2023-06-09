import React, { useRef, useState } from "react";
import axios from "axios";
import { IconButton, TextField, Button } from "@mui/material";
import { MicRounded, Send } from "@mui/icons-material";
import { Console } from "console";
import { CircularProgress } from '@mui/material';

function ControlPage() {
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    //const [chunks, setChunks] = useState<BlobPart[]>([]);
    const [recordingText, setRecordingText] = useState("Press");
    const [loading, setLoadingState] = useState(false);
    const [stream, setStream] = useState<MediaStream|null>(null);

    

    const handleClick = () => {
        if (!recording) {
            setRecordingText("Recording");
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(stream => {
                    const recorder = new MediaRecorder(stream);
                    setStream(stream); 
                    setMediaRecorder(recorder);
                    let currentChunks: BlobPart[] = [];
                    recorder.ondataavailable = e => currentChunks.push(e.data);
                    recorder.onstop = () => { 
                        stream.getTracks().forEach(track => track.stop()); 
                        handleAudioStop(currentChunks); 
                    }
                    recorder.start();

                });
        } else {
            setLoadingState(true);
            setRecordingText("Press");
            if (mediaRecorder) mediaRecorder.stop();  
        }
        setRecording(!recording);
    };

    const handleAudioStop = async (chunks: BlobPart[]) => {
        console.log("stopped")
        const blob = new Blob(chunks, { 'type' : 'audio/wav' });
        console.log(blob)
        const formData = new FormData();
        formData.append("audio", blob);
        try {
            // Send the audio data
            const res = await axios.post("http://localhost:3000/openAI/audio-upload", formData);
            console.log(res);
            setInputValue(res.data);
                    
            // Send the response received to the other endpoint
            await axios.post("http://localhost:3000/openAI/string-upload", { "text": res.data });
        } catch(err) {
            console.log(err);
        }
     
        setLoadingState(false);
    };
    const [inputValue, setInputValue]  = useState("");
    const inputTextRef = useRef("");
    const handleText = async () => {
        // Send the response received to the other endpoint
        var text = inputTextRef.current.value;
        if(!text || text.trim() === "") return;
        console.log(text);

        await axios.post("http://localhost:3000/openAI/string-upload", { "text": text });
    };

    // TextField directly calls "http://localhost:3000/openAI/string-upload"!

    return (
        <div className="page">
            <div className="talkButton">
                {loading ?  <CircularProgress /> : <IconButton color="primary" size="large" onClick={handleClick}><MicRounded />{recordingText}</IconButton> }
            </div>
            <div className="inputTextContainer">
                <TextField
                    className="inputText"
                    id="outlined-multiline-flexible"
                    label="Type what you want to do"
                    multiline
                    maxRows={8}
                    inputRef={inputTextRef} 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button variant="contained" endIcon={<Send />} onClick={handleText}>Send</Button>
            </div>

        </div>
    )
};

export default ControlPage;