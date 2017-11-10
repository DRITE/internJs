
//import { ADD_CONTACT } from './actions';

// const initialState = {
//     queryString: '',
//     contacts: []
// }
// export function contactsApp(state = initialState, action) {
//     switch (action.type) {
//         case SEARCH_CONTACT:
//             return Object.assign({}, state, {
//                 querryString: action.query
//             });
//         case ADD_CONTACT:
//             return [...state, action.contact];
//         default:
//             return state
//     }
// }

const initialState = 0;
export function counter(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
// export function contacts(state = initialState, action) {
//     switch (action.type) {
//         case ADD_CONTACT:
//             return [...state, action.contact];
//         default:
//             return state;
//     }
// }
