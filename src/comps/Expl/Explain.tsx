import React from 'react';
import ExplainTxt from './ExplainT';
import './Explain.css';
import taggerImg from '../../assets/Tagger.png';

const Explain: React.FC = () => {
    return (
        <div className='explain-container' style={{
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'row',
        }}>
            <img src={taggerImg} className="explain-img"/>
            <ExplainTxt></ExplainTxt>
        </div>
    );
}

export default Explain;