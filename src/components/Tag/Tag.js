import React from 'react';
import './Tag.css';
import PropTypes from 'prop-types';

class Tag extends React.Component {
    state = {
        mouseOver: false
    };

    onMouseOver = () => {
        this.setState({mouseOver: true});
    };

    render () {
        return (
            <div className='wrapper'>
                <span 
                    className={`${this.props.color} tag`}
                    onMouseOver={this.onMouseOver}
                >
                    {this.props.text}
                </span>
                <div
                    className={`${this.state.mouseOver ? 'tooltip tooltip-show' : 'tooltip tooltip-hide'}`}
                >
                    <div className='tooltip-text'></div>
                </div>
            </div> 
        )
    };
};

Tag.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string.isRequired
};

export default Tag;