import React from 'react';
import '../stylesheets/_promo.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// Add Router, Route if needed ^^

const Promo = (props) => {
    // const items = props.foodItem;
    const randomArr = [
        {
            id: 15,
            category: "japanese",
            item: "lacus",
            description: "dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum",
            price: "$8.59",
            image: "https://media.istockphoto.com/photos/sushi-set-nigiri-and-sashimi-with-tea-picture-id508032520?k=6&m=508032520&s=612x612&w=0&h=JXr7IfjX1uMolwhKsTUCyRm_tcPFEGmsnAXJTMgWN_M=",
            fd_lat: 43.5594247,
            fd_long: 43.4277773,
            user_id: 23
        },
        {
            id: 75,
            category: "italian",
            item: "ligula vehicula",
            description: "ultrices phasellus id sapien in sapien iaculis con… adipiscing molestie hendrerit at vulputate vitae", price: "$19.78",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJ5ETRMUw7tSRnhVbexLZ1lCoH8eJbxLItVlplnpdW-pHiTigxw",
            fd_lat: -26.3018088,
            fd_long: -54.7192376,
            user_id: 18


        }, {
            id: 4,
            category: "american",
            item: "consequat dui",
            description: "nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet",
            price: "$15.80",
            image: "https://www.whatsuplife.in/gurgaon/blog/wp-content/uploads/2015/08/best-american-food-restaurants-gurgaon.jpg",
            fd_lat: 23.0594685,
            fd_long: 113.8146974,
            user_id: 2
        }, {
            id: 7,
            category: "chinese",
            item: "in",
            description: "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum",
            price: "$17.35",
            image: "https://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg",
            fd_lat: 46.3033966,
            fd_long: 44.1911993,
            user_id: 11
        }];

    console.log("this is randomly:", randomArr);
    return randomArr.map(item => {
        // console.log(item)
        let url = `/food/${item.category}`
        // console.log(url)
        return (

            < div className='promo-container' >
                <Link to={url}>
                    <div className='promo-elem'>
                        <img src={item.image} className='promo-image' alt=""></img>
                        <p>
                            {item.category}
                        </p>
                    </div>
                </Link>
            </div >

        )
    })



}

export default Promo;