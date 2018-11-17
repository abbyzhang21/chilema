import React from 'react';
import '../containers/FoodDetail/FoodDetail.css';


export const DetailFood = (props) => {

    const food = props.foodItem;
    return (
        <div className='Food-detail-container'>
            <div key={food.id}>
                <h2>{food.item}</h2>
                {food.price}
                {food.category}
            </div>
            <img src={food.image} alt=''></img>
            <img src={food.image} alt=''></img>
            <img src={food.image} alt=''></img>
            <div>
                {food.description}
            </div>
            <button>I Want It </button>
        </div>
    )
}