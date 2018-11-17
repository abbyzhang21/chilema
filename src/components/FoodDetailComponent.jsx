import React from 'react';
import '../containers/FoodDetail/FoodDetail.css';

export const DetailFood = (props) => {

    // console.log('food detail:', props.foodItem)

    return props.foodItem.map(item => {
        // console.log(item.image)
        return (
            <div className='Food-detail-container'>
                <div key={item.id}>
                    {item.item}
                </div>
            </div>
        )
    })
}