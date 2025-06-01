import React from 'react';


const ExplainTxt: React.FC = () => {
    return (
        <div className="explain-container-txt"
             style={
                 {
                     fontFamily: 'Outfit, sans-serif',
                     fontSize: '20px',
                 }
             }>
            <h2 style={{display: "flex", justifyContent: "center"}}>
                Was ist MP3-Tagging
            </h2>
            <p style={{display: "flex"}}>
                MP3-Tagging bedeutet, Audiodateien mit zusätzlichen Informationen zu versehen, wie Titel, Künstler,
                Album, Genre und mehr.
                Diese Tags helfen dabei, Musik zu organisieren und schneller zu finden.
            </p>
        </div>
    );
}

export default ExplainTxt;