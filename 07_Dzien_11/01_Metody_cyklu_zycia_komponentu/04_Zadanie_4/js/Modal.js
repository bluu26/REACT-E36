import React, {Component} from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
        };

    }

    componentDidMount(prevProps, prevState) {
        this.timer = setTimeout(() => {
            this.setState({modalOpen: true});
        }, 5000);

    }

    componentWillUnmount() {
        clearTimeout(this.timer)

    }

    render() {
        const {modalOpen} = this.state;
        const {heading} = this.props;
        if (!modalOpen) {
            return null;
        }

        return (
            <div>
            <h2>{heading}</h2>
            </div>
        );
    }
}


export default Modal;