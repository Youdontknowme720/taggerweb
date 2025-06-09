import React from 'react';
import Title from '../comps/Headding';
import Explain from '../comps/Expl/Explain';
import Dropbox from '../comps/DropboxAndInput/Dropbox';
import TaggingField from '../comps/DropboxAndInput/TaggingField';
import SubmitButton from '../comps/DropboxAndInput/SubmitButton';

const TaggerPage = () => {
    const [interpret, setInterpret] = React.useState('');
    const [titel, setTitel] = React.useState('');
    const [file, setFile] = React.useState<File | null>(null);

    return (
        <div style={ {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "'Outfit', sans-serif"
        }}>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "-2vh"}}>
                <Title text="Tag your MP3-Files for free"/>
            </div>
            <div style={
                {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "1200px",
                    height: "30vh",
                    margin: "0 auto",
                }
            }>
                <Explain />
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "5vh"}}>
                <Dropbox onFileDrop={setFile} />
            </div>
            <div style={{display: "flex", marginTop: "0.5vh"}}>
                <TaggingField tagname="Enter Interpret" value={interpret} onChange={setInterpret} />
                <TaggingField tagname="Enter Title" value={titel} onChange={setTitel} />
            </div>
            <SubmitButton interpret={interpret} titel={titel} file={file} />
        </div>
    );
};

export default TaggerPage;
