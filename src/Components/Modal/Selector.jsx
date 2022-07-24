import React, { useState } from 'react';
import Select from "react-select";
    // className="form-select form-select-lg mb-3 appearance-none block w-full px-4 py-2 text-xl font-normal text-white 
    // dark:bg-gray-600 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-lg transition ease-in-out
    // focus:text-white focus:dark:bg-gray-600 focus:border-blue-600 focus:outline-none"
    // aria-label=".form-select-lg"

const options = [
    { value: 'Manager', label: 'Manager' },
    { value: 'Engineer', label: 'Engineer' },
    { value: 'Intern', label: 'Intern' }
];

export default function Selector() {
    const [selectedOption, setSelectedOption] = useState(null);

return(
<div>
    <Select 
    className='form-select form-select-lg mb-3'
    defaultValue={selectedOption}
    onChange={setSelectedOption}
    options={options}
    />
</div>
)
}