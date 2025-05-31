import React from 'react';
import './TaggingField.css';

type Tag = {
    tagname: string;
    value: string;
    onChange: (value: string) => void;
}

const TaggingField: React.FC<Tag> = ({ tagname, value, onChange }) => {
    return(
        <div className="container-tagging-field">
            <label htmlFor={tagname} className="tag-label">{tagname}</label>
            <input type="text"
                   value={value}
                   onChange={(e) => onChange(e.target.value)}
                   className="tag-input"
            />
        </div>
    )
}

export default TaggingField;