import axios from 'axios';

export const addItem = (item) => {

  console.log('item', item)

  axios
    .post('/food/new', item)
    .then((response) => {
      console.log("POSTED ITEM: ", item)
      console.log('response.data: ', response.data)
    })
    .catch((err) => {
      console.log('err', err)
    })

}

export const editFood = (item) => {
  console.log('edited Item', item)
  axios
  .put(`/food/update/:id`, item)
  .then((response) => {
    console.log('EDITING ITEM', item)
    console.log('edit response.data', response.data)
  })
  .catch(err => {
    console.log('err', err)
  });

}


