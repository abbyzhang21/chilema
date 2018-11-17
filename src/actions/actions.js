import axios from 'axios';

const addItem = (item) => {

  console.log('item', item)

  axios
    .post('new', item)
    .then((response) => {
      console.log("POSTED ITEM: ", item)
      console.log('response.data: ', response.data)
    })
    .catch((err) => {
      console.log('err', err)
    })

}

// const loginUser = (item) => {
//   console.log('LOGIN item', item)
// }

// const loginUser = (user) => {

//   console.log('ACTION loginUser: ', user)

// }

// export default { addItem, loginUser };
// export const loginUser
export default addItem

