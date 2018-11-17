import axios from 'axios';
// import { getAllFood } from '../routes/foodRoutes';

export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';

export const getAllItems = () => {
  return dispatch => {
    axios
    .get('/food')
      .then(items => {
        dispatch({
          type: GET_ALL_ITEMS,
          payload: items.data
      })
    })
  }
}

const addItem = (item) => {

  console.log('item', item)

  axios
    .post('/food/new', item)
    .then((response) => {
      // console.log("POSTED ITEM: ", item)
      // console.log('response.data: ', response.data)
      // dispatch()
    })
    .catch((err) => {
      console.log('err', err)
    })

}


// export default getAllItems;
