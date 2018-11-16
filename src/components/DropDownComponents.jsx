import React from 'react';
import '../stylesheets/_dropdowns.css';

export const SearchContainer = (props) => {
    console.log('search options', props.foodItem)

    const items = props.foodItem;

    const distinctCategory = [...new Set(items.map(item => item.category))];

    console.log('items', items)
    console.log('distinctCategory', distinctCategory);
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
