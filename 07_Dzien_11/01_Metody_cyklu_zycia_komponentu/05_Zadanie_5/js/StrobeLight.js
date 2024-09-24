import React, {Component} from 'react';

class StrobeLight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
        };

    }


    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(prevState => ({
                isOn: !prevState.isOn,
            }));
        }, this.props.frequency)

    }

    componentWillUnmount() {
        // Czyszczenie interwału po odmontowaniu komponentu
        clearInterval(this.timer);
    }



    render() {
        const {color} = this.props;
        const {isOn} = this.state;
        return (
            <div style={{
                width: '500px',
                height: '50px',
                backgroundColor: isOn ? color : 'white',
            }}>

            </div>
    )
        ;
    }
}


export default StrobeLight;