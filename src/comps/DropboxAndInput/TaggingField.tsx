import React from 'react';
import './TaggingField.css';
import { motion } from 'framer-motion';

type Tag = {
    tagname: string;
    value: string;
    onChange: (value: string) => void;
}

const TaggingField: React.FC<Tag> = ({ tagname, value, onChange }) => {

    const [isFocused, setIsFocused] = React.useState(false);

    return(
        <div className="container-tagging-field">
            <label htmlFor={tagname} className="tag-label">{tagname}</label>
            <motion.input
                type="text"
                placeholder={tagname}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                animate={{
                    borderColor: isFocused ? '#4E71FF' : '#ccc',
                    scale: isFocused ? 1.08 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="tag-input"
                style={{
                    padding: '10px',
                    margin: '10px',
                    fontSize: '16px',
                    border: '2px solid',
                    borderRadius: '8px',
                    outline: 'none',
                    fontFamily: 'Outfit, sans-serif',
                }}
            />
        </div>
    )
}

export default TaggingField;