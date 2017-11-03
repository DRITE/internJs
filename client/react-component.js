//import {iMessage} from './message.js';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class ReactComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    //secondName ? <p> {this.props.secondName} </p > : <p> Незнакомый </p>; 
    render() {
        //console.log('ReactComponent is returned')
        return <div id="new_div">
                    <h1>Hello, YOPTA</h1>
                    <p>I'm {this.props.valGH} {this.props.name}</p>
                    {secondName ? <p> {this.props.secondName} </p > : <p> Незнакомый </p>}
                </div>
    }
}
ReactComponent.propTypes = {
    valGH: PropTypes.string,
    name: PropTypes.string
};

// ReactComponent.defaultProps = {
//     secondName : "BBBBBBB"
// }


//<p>{this.props.someText}</p>
//<p>{this.props.someMessage}</p>

//let sText = 'AAAAAAAAAAAAAA';
// ReactDOM.render(
//     <ReactComponent someText = {sText} someMessage = {iMessage}/>,
//     //document.getElementById('root')
// );