import React, {Component} from 'react';

class Box extends Component {
    state = {
        color: "green"
    }

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState(prev => {
                return prev.color === "green" ? {color: "red"} : {color: "green"}
            })
        }, 2000)
    }


    render() {
        return (
            <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: this.state.color
            }}>

            </div>
        );
    }
}

export default Box;