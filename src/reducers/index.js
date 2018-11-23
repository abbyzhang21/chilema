import { LOAD_ALL, ADD_NEW_FOOD } from '../actions';

const food = (state = [], action) => {

    switch (action.type) { // action is an object 
        case LOAD_ALL: // this is the type
            //do something
            
            // return state; //[]
            return action.payload; 
        case ADD_NEW_FOOD:
            return action.payload;    
        default:
            return state;

    }
}

export default food;

// Imagine this: 
// let actions = {
//     type: LOAD_ALL,
//     payload: data.data //the array from the "data from action'"
// }