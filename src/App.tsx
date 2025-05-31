import './App.css'
import Title from "./comps/Headding.tsx";
import Explain from "./comps/Expl/Explain";
import Dropbox from "./comps/DropboxAndInput/Dropbox.tsx";
import TaggingField from "./comps/DropboxAndInput/TaggingField.tsx";
import React from "react";

function App() {
    const [interpret, setInterpret] = React.useState('');
    const [titel, setTitel] = React.useState('');
    const [file, setFile] = React.useState<File | null>(null);

    const handleSubmit = async () => {
        console.log('Interpret:', interpret);
        console.log('Titel:', titel);
        console.log('Datei:', file);

        const API_URL = 'https://youdontknowme.pythonanywhere.com';
        const formData = new FormData();
        formData.append('interpret', interpret);
        formData.append('titel', titel);

        if (file) {
            formData.append('file', file);
        } else {
            console.error('No file selected');
            return;
        }
        try {
            const response = await fetch(`${API_URL}/tagging`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;

            a.download = file.name.replace('.mp3', '_getaggt.mp3');
            document.body.appendChild(a);
            a.click();

            // Aufräumen
            a.remove();
            window.URL.revokeObjectURL(url);

        } catch (error) {
            console.error('Error:', error);
        }

    };

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
            <div style={{display: "flex", justifyContent: "center", fontFamily: "Outfit, sans-serif"}}>
                <button onClick={handleSubmit} className={'submit'}>Submit</button>
            </div>
        </>

    )
}

export default App
