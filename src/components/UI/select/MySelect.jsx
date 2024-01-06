import React from "react";

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
            <select value={value.sort} onChange={e => onChange({...value, sort: e.target.value})}>
                <option disabled value="">{defaultValue}</option>
                {options.map(option => 
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                    )}
            </select>
    );
};


export default MySelect;