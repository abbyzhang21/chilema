import axios from 'axios';

const addItem = (item) => {

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

const editItem = (item) => {

  console.log('item', item)

  axios
    .put('/food/update/:id', item)
    .then((response) => {
      console.log("POSTED ITEM: ", item)
      console.log('response.data: ', response.data)
    })
    .catch((err) => {
      console.log('err', err)
    })

}

export default addItem

