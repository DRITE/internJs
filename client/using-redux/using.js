import {counter} from './contactsReduser';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
let store = createStore(counter);
ReactDOM.render(
    <Provider store = {store}>
        <PlusOne />
    </Provider>,
    document.getElementById('root')
);










// import {contacts} from './contactsReduser';
// import {createStore} from 'redux';
// import {addContact} from './actions';
// //import {contactsApp} from './contactsReduser';
// let store = createStore(contacts);
// console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA');
// console.log(store.getState());
// store.dispatch(addContact({name: 'sdfsdf'}));
// console.log(store.getState()); 


