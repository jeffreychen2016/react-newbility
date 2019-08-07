import React from 'react';
import './Tag.css';
import PropTypes from 'prop-types';

const tag = (props) => {
    return (
        <span className={`${props.color} tag`}>{props.text}</span>
    );
};

tag.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string.isRequired
};

export default tag;