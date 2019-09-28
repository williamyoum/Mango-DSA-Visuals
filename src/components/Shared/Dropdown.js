import React from 'react';

function Dropdown(props) {
    return (
        <select
            onChange={props.onChange} 
            value={props.selected}>
            {props.options.map((element, index) => {
                return <option 
                    key={index} 
                    value={element}>{element}</option>
            })}
        </select>

    );
}

export default Dropdown;