import React from 'react';

const FoodList = (props) => {
    console.log('food list:', props)
    return <div>{props.foods}</div>
    // return props.item.map(food => <div>{food.item}</div>);
}

export default FoodList;