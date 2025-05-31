import React from 'react';
import ExplainTxt from './ExplainT';
import './Explain.css';
import taggerImg from '../../assets/Tagger.png';

const Explain: React.FC = () => {
    return (
        <div className='explain-container'>
            <ExplainTxt></ExplainTxt>
            <img src={taggerImg} className="explain-img"/>
        </div>
    );
}

export default Explain;