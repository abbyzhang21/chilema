import React from 'react';
import '../stylesheets/_dropdowns.css';
import Select from 'react-select';
import {BrowserRouter as Link} from 'react-router-dom'

export const SearchContainer = (props) => {
    // console.log('search options', props.foodItem)

    const items = props.foodItem;

    const distinctCategory = [...new Set(items.map(item => item.category))];

    // const newItems = [...new Set(items)];

    // console.log('items', items)
    // console.log('distinctCategory', distinctCategory);
    let options = [];
    distinctCategory.map(e => {
        let local = {};
        local.value = e;
        local.label = e;
        options.push(local);
    })

    let url = `/food/${items.category}`
    return (
        <div className="dropdown-container">    
            <div className="categories">
            <Link to={url}>    
                <Select className='drop-down-elem'
                    placeholder='what would you like to eat ...'
                    options={options}
                    />
            </Link>    
                </div>  
        </div>
    )
    // })
}


export const DietaryRestrictionComponent = () => {

    return (
        <div className="dropdown-container">
            <select className="select-container">
                <option value="default">
                    Any Dietary Restrictions?
                </option>
                <option value="Yes">
                    YES
                </option>
                <option value="No">
                    NO
                </option>
            </select>
        </div>
    )
}
