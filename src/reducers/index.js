import { LOAD_ALL } from '../actions';

const food = (state = [], action) => {

    switch (action.type) {
        case LOAD_ALL:
            //do something
            return action.payload; //[]
        default:
            return state;

    }
}

export default food;