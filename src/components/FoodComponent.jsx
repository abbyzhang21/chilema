import React from 'react';

export const FoodList = (props) => {
    console.log('food list:', props.foodItem)

    return props.foodItem.map(item => {
        return (
            <div key={item.id} className="test" >
                <h1>hello</h1>
                <p>{item.item}</p>

            </div>
        )
    })
}

