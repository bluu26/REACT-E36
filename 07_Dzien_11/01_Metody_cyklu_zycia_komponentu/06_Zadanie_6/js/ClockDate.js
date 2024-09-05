import React, {Component} from 'react';

class ClockDate extends Component {
    render() {
        return (
            <div>
                {this.props.date}
            </div>
        );
    }
}

export default ClockDate;