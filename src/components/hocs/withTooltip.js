import React from 'react';
import Tooltip from '../Tooltip/Tooltip';

const withTooltip = (WrappedComponent) => {
    class WithTooltip extends React.Component {
        render() {
            const {...rest} = this.props;
            return (
                <div>
                    <Tooltip />
                    <WrappedComponent {...rest} />
                </div>
            )
        }
    };

    return WithTooltip;
}

export default withTooltip;