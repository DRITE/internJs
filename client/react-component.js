//import {iMessage} from './message.js';
import React from 'react';
import ReactDOM from 'react-dom';

export class ReactComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //console.log('ReactComponent is returned')
        return <div id="new_div">
            <h1>Hello, YOPTA</h1>


        </div>
    }
}
//<p>{this.props.someText}</p>
//<p>{this.props.someMessage}</p>

let sText = 'AAAAAAAAAAAAAA';
// ReactDOM.render(
//     <ReactComponent someText = {sText} someMessage = {iMessage}/>,
//     //document.getElementById('root')
// );