/* eslint-disable react/prop-types */
import { FaMoon } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";
import { BsSunFill } from "react-icons/bs";

function DarkModeButton({ onClick, children }) {
    const [isDarkMode, setIsDarkMode] = useDarkMode();
    const handleToggleDark = () => {
        setIsDarkMode(!isDarkMode)
        localStorage.setItem('darkMode', isDarkMode);
    }
    return (
        <button
            className={` text-center rounded-full bg-transparent hover:bg-gray-600/10 text-white font-bold p-3 rounder ${isDarkMode && 'bg-gray-500 hover:bg-gray-700/95'}`}
            type="button"
            onClick={onClick || handleToggleDark}
        >{children || (!isDarkMode ? <FaMoon className="text-black" /> : <BsSunFill />)}
        </button>
    )
}

export default DarkModeButton;
