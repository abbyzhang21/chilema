import axios from 'axios';

export const LOAD_ALL = 'LOAD_ALL';

export const loadAllData = () => {
    console.log('ACTION: LoadAllData was called!');
    return function (dispatch) {
        return axios.get('http://192.168.200.87:9000/food')
            .then(data => {
                console.log('data from action', data)
                dispatch({
                    type: LOAD_ALL,
                    payload: data.data //the array from the "data from action'"
                })
            })
            .catch(err => {
                dispatch({
                    type: LOAD_ALL,
                    payload: 'err'
                })
            })
    }
}