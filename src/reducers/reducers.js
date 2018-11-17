// import { addItem } from '../actions/actions.js';
import { GET_ALL_ITEMS } from '../actions/actions';

const Reducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_ITEMS: 
            return [...action.items]
        default: 
            return state  
        
    }
}

export default Reducer;