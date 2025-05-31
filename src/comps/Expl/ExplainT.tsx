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
            <h2>
                Was ist MP3-Tagging</h2>
            <p>
                MP3-Tagging bedeutet, Audiodateien mit zusätzlichen Informationen zu versehen, wie Titel, Künstler,
                Album, Genre und mehr.
                Diese Tags helfen dabei, Musik zu organisieren und schneller zu finden – sei es auf dem Computer, in
                einer Musik-App oder auf einem MP3-Player.
            </p>
        </div>
    );
}

export default ExplainTxt;