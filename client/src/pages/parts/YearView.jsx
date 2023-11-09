// import PropTypes from "prop-types";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Dropdown from "../../components/Dropdown";
import { useState } from "react";
import { transformString } from "../../utils";
import SmallMonthView from "../../components/SmallMonthView";
// import { Fragment } from "react";

const YearView = () => {
    const currentStartDate = new Date();
    // const currentYear = currentStartDate.getFullYear();
    const [startDayOfWeek, setStartDayOfWeek] = useState('sunday');
    const [currentYear, setCurrentYear] = useState(currentStartDate.getFullYear())
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ]

    const goToday = () => {
        console.log('Today !');
        setCurrentYear(new Date().getFullYear())
    }

    const goPrevYear = () => {
        console.log('Prev Year');
        setCurrentYear(currentYear - 1)
    }

    const goNextYear = () => {
        console.log('Next Year!');
        setCurrentYear(currentYear + 1)
    }
    return (
        <div className="w-full">
            <div className='flex items-center justify-between mb-2'>
                <h2 className="text-lg font-bold ">
                    {currentYear}
                </h2>
                <div className='flex flex-row gap-2'>
                    <div className='flex items-center justify-between w-40 gap-1 px-3 py-2 border rounded-md'>
                        <button type="button" onClick={goPrevYear}><FaAngleLeft /></button>
                        <button type="button" onClick={goToday} className='text-sm uppercase'>Today</button>
                        <button type="button" onClick={goNextYear}><FaAngleRight /></button>
                    </div>
                    <Dropdown
                        options={['Sunday', 'Monday']}
                        selectedOption={startDayOfWeek}
                        onOptionChange={(option) => { setStartDayOfWeek(transformString(3, option)) }}
                    />
                </div>

            </div>
            <div className="grid grid-cols-1 grid-rows-1 gap-6 p-2 lg:grid-rows-3 lg:grid-cols-4 md:grid-rows-4 md:grid-cols-3">
                {months.map((monthName, monthIndex) => (
                    <div
                        key={monthIndex}>
                        <h2 className="flex justify-center font-bold text-md">{monthName}</h2>
                        <SmallMonthView month={monthIndex} year={currentYear} startDayOfWeek={startDayOfWeek} />
                    </div>
                ))}
            </div>
        </div>
    );
};

YearView.propTypes = {};

export default YearView;
