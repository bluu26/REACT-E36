import React, {Component} from 'react';

class ClockTime extends Component {
    render() {
        return (
            <div>
                {this.props.time}
            </div>
        );
    }
}

export default ClockTime;