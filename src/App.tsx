import './App.css'
import Title from "./comps/Headding.tsx";
import Explain from "./comps/Expl/Explain";
import Dropbox from "./comps/DropboxAndInput/Dropbox.tsx";
import TaggingField from "./comps/DropboxAndInput/TaggingField.tsx";
import SubmitButton from "./comps/DropboxAndInput/SubmitButton.tsx";
import React from "react";

function App() {
    const [interpret, setInterpret] = React.useState('');
    const [titel, setTitel] = React.useState('');
    const [file, setFile] = React.useState<File | null>(null);

    return (
        <>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Title text="Tag your MP3-Files for free"/>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Explain></Explain>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "120px"}}>
                <Dropbox onFileDrop={setFile}></Dropbox>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <TaggingField tagname={'Enter Interpret'} value={interpret} onChange={setInterpret}></TaggingField>
                <TaggingField tagname={'Enter Titel'} value={titel} onChange={setTitel}></TaggingField>
            </div>
            <SubmitButton interpret={interpret} titel={titel} file={file} />
        </>

    )
}

export default App
