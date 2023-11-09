import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';


const Dropdown = ({ options, selectedOption, onOptionChange }) => {
    const [currentSelectedOption, setCurrentSelectedOption] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setCurrentSelectedOption(option)
        onOptionChange(option);
        setIsOpen(false);
    }

    // We use the useEffect hook to synchronize the local state with the prop selectedOption. 
    // This ensures that the component updates when the selected option from the parent component changes.
    // useEffect(() => {
    //     setSelectedOption(options[0]);
    // }, [options, selectedOption])

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='relative'>
            <div>
                <div
                    onClick={toggleDropdown}

                    className={`flex items-center justify-between w-48 px-3 py-2 text-sm uppercase bg-white border rounded cursor-pointer select-none disable:opacity-25 ${isOpen ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`}

                >
                    <span>{currentSelectedOption}</span> <FaAngleDown />
                </div>

                {/* <label htmlFor="dropdown">Select an option</label> */}
                {isOpen && (
                    <ul
                        className='absolute w-48 py-2 tracking-widest uppercase transition ease-in-out bg-white border rounded shadow-sm top-12 z-1 ap-2 focus:outline-none focus:ring-2 '
                        id="dropdown"
                        onChange={handleOptionClick}
                        value={selectedOption}
                    >
                        {options.map((option, index) => (
                            <li className='w-full p-2 mx-auto text-center hover:bg-gray-200 pointer'
                                key={index}
                                onClick={() => {
                                    handleOptionClick(option)
                                    // setSelectedOption(option);
                                    // setShowOptions(false);
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul >
                )}

            </div>
        </div>
    );
};


Dropdown.propTypes = {
    options: PropTypes.array,
    selectedOption: PropTypes.string,
    onOptionChange: PropTypes.func
    // className: PropTypes.string
};


export default Dropdown;
