import axios from 'axios';
import { getAllFood } from '../routes/foodRoutes';

export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';

export function getAllItems() {
  return dispatch => {
    getAllFood() 
      .then(items => {
        dispatch({
          type: GET_ALL_ITEMS,
        items: items  
      })
    })
  }
}

// const addItem = (item) => {

//   console.log('item', item)

//   axios
//     .post('new', item)
//     .then((response) => {
//       console.log("POSTED ITEM: ", item)
//       console.log('response.data: ', response.data)
//     })
//     .catch((err) => {
//       console.log('err', err)
//     })

// }

export default getAllItems;

