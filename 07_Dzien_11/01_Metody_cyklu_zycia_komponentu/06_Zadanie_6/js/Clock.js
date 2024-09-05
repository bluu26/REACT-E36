import React, {Component} from 'react';
import ClockTime from "./ClockTime";
import ClockDate from "./ClockDate";

class Clock extends Component {
    state = {
        date: new Date()
    }

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState({date: new Date()
            })
        }, 1000)
    }
    // componentWillUnmount() {
    //     clearInterval(this.id);
    // }
    render() {
        return (
            <div>
                <ClockTime time={this.state.date.toLocaleTimeString()} />
                <ClockDate date={this.state.date.toLocaleDateString()}/>
            </div>
        );
    }
}

export default Clock;