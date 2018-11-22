import { LOAD_ALL } from '../actions/actions.js'
// if you name the file as index.js then you would only have to import from '../actions' 

const food = (state = [], action) => {
    // state = [] specifies that it is an empty array if nothing comes back
    // state doesn't have any reference of a particular file (state is just the environment/condition that it is in)

    switch (action.type) {
        //will have different cases
        case LOAD_ALL: // step 2
            // in the case of LOAD_ALL: 
            // do something 
            return state; // []
        default:
            return state;    
    }
} 

export default food;
