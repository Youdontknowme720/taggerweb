import React from 'react';


const ExplainTxt: React.FC = () => {
    return (
        <div className="explain-container-txt"
             style={
                 {
                     fontFamily: 'Outfit, sans-serif',
                 }
             }>
            <h2 style={{display: "flex", fontSize: '1.5rem'}}>
                What is MP3-Tagging
            </h2>
            <p style={{display: "flex", fontSize: '1.2rem', width: "80%"}}>
                MP3 tagging means tagging audio files with additional information, such as title, artist,
                album, genre and more. These tags help to organize music and find it more quickly.
            </p>
        </div>
    );
}

export default ExplainTxt;