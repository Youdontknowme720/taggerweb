import React from 'react';
import './Headding.css';

type TitleProps = {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <div className="title-container">
            <h1 className="title-text">{text}</h1>
        </div>
    );
}

export default Title;