import axios from 'axios';

export const LOAD_ALL = 'LOAD_ALL';
export const ADD_NEW_FOOD = 'ADD_NEW_FOOD';

export const loadAllData = () => {
    console.log('ACTION: LoadAllData was called!');
    return function (dispatch) {
        return axios.get('http://localhost:5000/food')
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

export const addNewFood = () => {
    console.log('ACTION: addNewFood was called');
    return function (dispatch) {
        return 
        axios
            .get('http://localhost:5000/new')
            .then(data => {
                console.log('addNewFood data from action', data) 
                dispatch({
                    type: ADD_NEW_FOOD,
                payload: data    
                })       
            })
            .catch(err => {
                dispatch({
                    type: ADD_NEW_FOOD,
                payload: 'err'    
            })
        })
    }
}