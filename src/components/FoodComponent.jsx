import React from 'react';
import '../containers/App/App.css';

export const FoodList = (props) => {
    console.log('food list:', props.foodItem)

    return props.foodItem.map(item => {
        console.log(item.image)

        return (
            <div className='foodList-container' >
                <div key={item.id} className="foodList" >
                    <div>
                        <img src={item.image} alt="" />
                    </div>

                    <ul className='list'>
                        <li>
                            <a href="#"><h3>{item.item}</h3></a>
                        </li>
                        <li>
                            {item.price}
                            <a href="#">
                                <p>{item.category}</p>
                            </a>
                        </li>
                        <li>
                            {item.description}
                        </li>
                    </ul>

                </div>
            </div >
        )
    })
}

