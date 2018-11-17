import React from 'react';
import '../containers/App/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export const FoodList = (props) => {
    console.log('food list:', props.foodItem)

    // return (
    //     <div>hi</div>
    // )

    return props.foodItem.map(item => {
        // console.log(item.image)
        return (
            <div className='foodList-container' >
                <div key={item.id} className="foodList" >
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                    <ul className='list'>
                        <li>
                            <a href={'food/detail/' + item.id}><h3>{item.item}</h3></a>
                        </li>
                        <li>
                            {item.price}
                            <a href="google.com">
                                <p>{item.category}</p>
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faUserCircle} color='#666633' className='user-icon' />
                            {item.description}
                        </li>
                    </ul>

                </div>
            </div >
        )
    })
}

