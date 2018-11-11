import React from 'react';
import '../stylesheets/_search.css';

export const SearchContainer = (props) => {
    console.log('search options', props.foodItem)

    const items = props.foodItem;
    const local = props.itemLocation;

    const distinctCategory = [... new Set(items.map(item => item.category))];

    const distinctLocation = [... new Set(local.map(location => location.city))];
    
    console.log('items', items)
    console.log('distinctCategory', distinctCategory);

    console.log('local', local);
    console.log('City location', distinctLocation);

    // return props.foodItem.map(item => {
        return (
            <div className="search-container">
                <div className="categories">
                    <select>
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
