import { name } from './user.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent } from './react-component';
import PropTypes from 'prop-types';

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
// );

//alert(name);



class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <ReactComponent valGH={234} name = {sText}/>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
// secondName = 'ABABABABAAB'
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)
let sText = 'AAAAAAAAAAAAAA';
//let sText = 'AAAAAAAAAAAAAA';