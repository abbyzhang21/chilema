import axios from 'axios';

export const LOAD_ALL = 'LOAD_ALL';

export const loadAllData = () => {
    //Sanity Check: 
    console.log('ACTION: loadAllData was called');

    return function (dispatch) { 
        return
        axios
        .get('http://192.168.200.87:9000/food')
            .then(data => { // step 3
                console.log('data from action', data);
                dispatch({
                    //dispatch looks for an object
                    // two requirements: type & payload
                    type: LOAD_ALL,
                    payload: data 
            })
            .catch(err => {
                dispatch({
                    type: LOAD_ALL,
                    payload: 'err'
                })
            })
        }) 
    }

}