import React, {useState } from 'react'

export default function Dropdown() {
    const [selectedValue, setSelectedValue] = useState("option1");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedValue(selectedValue);
    };

    // const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {

    // }

  return (
    <div>
        <label htmlFor="dropDown"></label>
        <select title="select" id="my-dropdown" value={selectedValue} onChange={handleChange}>
            <option value="option1"></option>
            <option value="option2"></option>
            <option value="option3"></option>
            <option value="option4"></option>
        </select>
      
    </div>
  )
}
