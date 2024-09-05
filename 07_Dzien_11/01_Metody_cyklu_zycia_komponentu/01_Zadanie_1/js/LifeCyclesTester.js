import React, {Component} from 'react';

class LifeCyclesTester extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "hello word"
        }
        console.log('Konstruktor')

    }

    componentDidMount() {
    console.log('zamontowany')
        setTimeout(() => {
            this.setState({text: "hiiiiiiiiiiiiiiiii"})
        }, 3000)
    }


    componentDidUpdate(prevProps, prevState) {
    console.log('Aktualizacja')
    }

    componentWillUnmount() {
    console.log('Usuniecie komponentu')
    }

    render() {
        console.log('render')
        return (

            <div>
                {this.state.text}
            </div>
        );
    }
}


export default LifeCyclesTester;