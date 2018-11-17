// import { addItem } from '../actions/actions.js';
import { GET_ALL_ITEMS } from '../actions/actions';

const Reducer = (state = {
    foodItem: []
}, action) => {
    switch (action.type) {
        case GET_ALL_ITEMS:
            console.log("Hi I hit reducer.js")    
            return {...state, foodItem: action.payload}
        default: 
            return state  
        
    }
}

export default Reducer;