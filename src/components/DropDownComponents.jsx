import React from 'react';
import '../stylesheets/_dropdowns.css';

export const SearchContainer = (props) => {
    console.log('search options', props.foodItem)

    const items = props.foodItem;
    // const local = props.itemLocation;

    const distinctCategory = [...new Set(items.map(item => item.category))];

    // const distinctLocation = [... new Set(local.map(location => location.city))];

    console.log('items', items)
    console.log('distinctCategory', distinctCategory);

    // console.log('local', local);
    // console.log('City location', distinctLocation);

    // return props.foodItem.map(item => {
    return (
        <div className="dropdown-container">
            <div className="categories">
                <select className="select-container">
                    <option value="default">What do you feel like eating?</option>
                    {distinctCategory.map(category => (
                        <option value={category}>{category}</option>
                    ))}
                </select>
                {/* <select>
                        {distinctLocation.map(location => (
                            <option value={location}>{location}</option>
                        ) )}
                    </select> */}
            </div>
        </div>
    )
    // })
}


export const DietaryRestrictionComponent = () => {

    return (
        <div className="dropdown-container">
            <select className="select-container">
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
