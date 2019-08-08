import React from 'react';
import './Tag.css';
import PropTypes from 'prop-types';

class Tag extends React.Component {
    render() {
        return (
            <span className={`${this.props.color} tag`}>
                {this.props.text}
            </span>
        )
    };
};

Tag.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string.isRequired
};

export default Tag;