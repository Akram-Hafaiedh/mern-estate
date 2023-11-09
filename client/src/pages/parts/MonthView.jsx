// import PropTypes from "prop-types";

import { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import Dropdown from '../../components/Dropdown';


const MonthView = () => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [startDayOfWeek, setStartDayOfWeek] = useState('sunday'); // State variable to track the current week's starting date

    const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // Days of the week
    const orderedDaysInWeek = startDayOfWeek === 'sunday'
        ? daysInWeek
        : [...daysInWeek.slice(1), daysInWeek[0]]

    // console.log(orderedDaysInWeek);

    // const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)
    const gridStartDay = startDayOfWeek === 'sunday' ? 1 - firstDayOfMonth.getDay() : 2 - firstDayOfMonth.getDay();

    // const gridStartDay = 1 - firstDayOfMonth.getDay()
    // const gridEndDay = lastDayOfMonth.getDate();


    function isCurrentMonth(day) {
        return day >= 1 && day <= lastDayOfMonth.getDate() && currentMonth === currentDate.getMonth();

    }

    const goPrevMonth = () => {
        const prevMonth = new Date(currentYear, currentMonth - 1, 1);
        // prevMonth.setMonth(prevMonth.getMonth() - 1)
        setCurrentDate(prevMonth)

    }
    const goNextMonth = () => {
        const nextMonth = new Date(currentYear, currentMonth + 1, 1);
        setCurrentDate(nextMonth)
    }

    const goToday = () => {
        setCurrentDate(new Date()); // Set the current week's starting date to today's date
    }


    return (
        <div className="w-full">
            <div className='flex items-center justify-between mb-2'>
                <h2 className="text-lg font-bold ">{currentDate.toLocaleDateString('en-US', { month: 'long' }) + ' - ' + currentYear}</h2>
                <div className='flex flex-row gap-2'>

                    <div className='flex items-center justify-between w-40 gap-1 px-3 py-2 border rounded-md'>
                        <button onClick={goPrevMonth}><FaAngleLeft /></button>
                        <button onClick={goToday} className='text-sm uppercase'>Today</button>
                        <button onClick={goNextMonth}><FaAngleRight /></button>
                    </div>
                    <Dropdown
                        options={['Sunday', 'Monday']}
                        selectedOption={startDayOfWeek}
                        onOptionChange={(option) => setStartDayOfWeek(option.toLowerCase())}
                    />
                </div>

            </div>
            <div className="grid grid-cols-7">
                {orderedDaysInWeek.map((day, index) => (
                    <div
                        className={`p-2 text-center font-medium border ${currentMonth === new Date().getMonth() ? 'text-black' : 'text-gray-300'} `}
                        key={index}>{day}</div>
                ))}
                {Array.from({ length: 6 * 7 }).map((_, day) => {
                    const currentDate = new Date(currentYear, currentMonth, day + gridStartDay);
                    const isDayInCurrentMonth = isCurrentMonth(day + gridStartDay);
                    const isToday = currentDate.toDateString() === new Date().toDateString();
                    return (
                        <div
                            key={day}
                            className={` p-2 border h-28   
                            ${isDayInCurrentMonth ? 'bg-white text-black' : 'bg-gray-200/40 text-gray-400'}
                            ${isToday ? 'font-bold' : 'font-medium'} 
                            `}
                        >
                            {isToday ? (
                                <span className="flex items-center justify-center w-4 h-4 p-4 text-white bg-blue-800 rounded-full "> {currentDate.getDate()}</span>
                            ) : (
                                <span>{currentDate.getDate()}</span>
                            )}
                        </div>
                    )
                })}
            </div>
        </div >
    );
};

MonthView.propTypes = {};

export default MonthView;
