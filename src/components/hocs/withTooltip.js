import React from 'react';
import Tooltip from '../Tooltip/Tooltip';

const withTooltip = (WrappedComponent) => {
    class WithTooltip extends React.Component {
        render() {
            return (
                <div>
                    <Tooltip />
                    <WrappedComponent 
                        color={this.props.color}
                        text={this.props.text}
                    />
                </div>
            )
        }
    };

    return WithTooltip;
}

export default withTooltip;