import React from 'react';
import '../stylesheets/_dropdowns.css';
import Select from 'react-select';
// import { BrowserRouter as Link } from 'react-router-dom'

export const SearchContainer = (props) => {
    // console.log('search options', props.foodItem)

    const items = props.foodItem;
    // console.log('search container items', items)

    const distinctCategory = [...new Set(items.map(item => item.category))];
    console.log('distinctCategory items', distinctCategory)

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
    console.log('options', options)
    return (
        <div className="dropdown-container">
            <div className="categories">

                <Select className='drop-down-elem'
                    placeholder='what would you like to eat ...'
                    options={options}
                />
            </div>
        </div>
    )

}


export const DietaryRestrictionComponent = () => {
    let dietaryOptions = ['yes', 'no'];

    return (
        <div className="dropdown-container">
            <Select className='select-container'
                options={dietaryOptions}
            />    
            {/* <select className="select-container">
                <option value="default">
                    Any Dietary Restrictions?
                </option>
                <option value="Yes">
                    YES
                </option>
                <option value="No">
                    NO
                </option>
            </select> */}
        </div>
    )
}
