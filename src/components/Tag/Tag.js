import React from 'react';
import './Tag.css';

const tag = (props) => {
    return (
        <span className={`${props.color} tag`}>{props.text}</span>
    );
};

export default tag;