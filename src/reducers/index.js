import { LOAD_ALL } from '../actions';

const food = (state = [], action) => {

    switch (action.type) {
        case LOAD_ALL:
            //do something
            return state; //[]
        default:
            return state;

    }
}

export default food;