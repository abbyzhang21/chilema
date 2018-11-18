import axios from 'axios';
// import { getAllFood } from '../routes/foodRoutes';

export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';

export const getFoodItems = () => {
  console.log("hi I hit action..js");
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

export const getFoodById = (id) => {
  console.log("hitting food by id?");
  return dispatch => {
    axios
      .get(`/food/detail/${id}`)
      .then(item => {

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
