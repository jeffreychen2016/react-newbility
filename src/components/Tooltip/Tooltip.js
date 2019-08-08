import React from 'react';
import './Tooltip.css';

class Tooltip extends React.Component {
    render() {
        return (
            <div className='tooltip'>
                <div className='tooltip-text'>this is tooltip text</div>
            </div>
        );
    };
};

export default Tooltip;