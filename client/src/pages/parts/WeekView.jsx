// import PropTypes from "prop-types";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Dropdown from "../../components/Dropdown";
import { useEffect, useState } from "react";
import { transformString } from "../../utils";

function WeekView() {

    const [currentStartDate, setCurrentStartDate] = useState(new Date());
    const [startDayOfWeek, setStartDayOfWeek] = useState('Sunday');
    const hoursOfDay = Array.from({ length: 24 }, (_, i) => i);
    const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // Days of the week


    // const orderedDaysInWeek = startDayOfWeek === 'sunday'
    //     ? daysInWeek
    //     : [...daysInWeek.slice(1), daysInWeek[0]]

    const [orderedDaysInWeek, setOrderedDaysInWeek] = useState([]);
    const [, setStartOfWeek] = useState(new Date());

    useEffect(() => {

        const dayIndex = daysInWeek.indexOf(transformString(3, startDayOfWeek));
        const newStartOfWeek = new Date(currentStartDate);
        newStartOfWeek.setDate(currentStartDate.getDate() - (currentStartDate.getDay() - dayIndex + 7) % 7)

        const orderedDays = [];
        for (let i = 0; i < 7; i++) {
            const newDate = new Date(newStartOfWeek);
            newDate.setDate(newStartOfWeek.getDate() + i)
            orderedDays.push(newDate.getDate());
        }


        //*Calculate 'orderedDaysInWeek' and 'startOfWeek' inside the useEffect
        setOrderedDaysInWeek(orderedDays);
        setStartOfWeek(newStartOfWeek);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startDayOfWeek, currentStartDate])



    const goToday = () => {
        setCurrentStartDate(new Date());
    }
    const goNextWeek = () => {
        const nextWeekStartDate = new Date(currentStartDate);
        nextWeekStartDate.setDate(currentStartDate.getDate() + 7)
        setCurrentStartDate(nextWeekStartDate)
    }
    const goPrevWeek = () => {
        const prevWeekStartDate = new Date(currentStartDate);
        prevWeekStartDate.setDate(currentStartDate.getDate() - 7);
        setCurrentStartDate(prevWeekStartDate)
    }
    return (
        <div className="w-full">
            <div className='flex items-center justify-between mb-2'>
                <h2 className="text-lg font-bold ">
                    {currentStartDate.toLocaleDateString('en-US', { month: 'long' }) + ' - ' + currentStartDate.getFullYear()}
                </h2>
                <div className='flex flex-row gap-2'>

                    <div className='flex items-center justify-between w-40 gap-1 px-3 py-2 border rounded-md'>
                        <button type="button" onClick={goPrevWeek}><FaAngleLeft /></button>
                        <button type="button" onClick={goToday} className='text-sm uppercase'>Today</button>
                        <button type="button" onClick={goNextWeek}><FaAngleRight /></button>
                    </div>
                    <Dropdown
                        options={['Sunday', 'Monday']}
                        selectedOption={startDayOfWeek}
                        onOptionChange={(option) => {
                            setStartDayOfWeek(transformString(3, option))
                            console.log(startDayOfWeek);
                        }}
                    />
                </div>

            </div>
            <div className="grid grid-cols-8 gap-1">
                {/* Empty top-left cell */}
                <div className="p-2 text-center"></div>
                {orderedDaysInWeek.map((dayNumber, index) => {
                    //* Calculate the day of the week based on the day number
                    const dayOfWeek = (currentStartDate.getDay() + (dayNumber - currentStartDate.getDate())) % 7;
                    // Map the dayNumber to the corresponding day name
                    const dayName = daysInWeek[dayOfWeek];
                    const isCurrentDay = dayNumber === currentStartDate.getDate();
                    return (
                        <div
                            className='flex flex-row items-center justify-center row-span-1 gap-3 p-2 font-medium text-center border'
                            key={index}>
                            <span>
                                {dayName}
                            </span>
                            <span className={`p-4 flex items-center justify-center w-4 h-4 
                            ${isCurrentDay ? ' text-white bg-blue-800 rounded-full' : ''}`}>
                                {dayNumber}
                            </span>
                        </div>
                    )
                })}

                <div className="grid col-span-1 grid-rows-24" >

                    {/* {hoursOfDay.map((hour, hourIndex) => (
                        <div
                            id={hourIndex}
                            key={hourIndex}
                            className="p-2 text-center border border-l-0">
                            {`${hour}:00 - ${hour + 1}:00`}
                        </div>
                    ))} */}

                    {/* hours 0 to 12 AM */}
                    {hoursOfDay.slice(0, 12).map((hour) => (
                        <div
                            className="relative left-0 p-2 text-center border border-l-0 "
                            key={hour}
                        >
                            <span className="absolute">
                                {`${hour} AM`}
                            </span>
                        </div>
                    ))}
                    {hoursOfDay.slice(12).map((hour) => (
                        <div
                            className="relative top-0 p-2 text-center border border-l-0 "
                            key={hour}
                        >
                            <span className="absolute">
                                {`${hour == 12 ? 12 : hour % 12} PM`}
                            </span>
                        </div>
                    ))}

                </div>
                {orderedDaysInWeek.map((day, dayIndex) => (
                    <div className="grid grid-rows-24" key={dayIndex}>
                        {hoursOfDay.map((hour, hourIndex) => (
                            <div
                                key={`${hourIndex}-${dayIndex}`}
                                className="p-2 font-medium text-center border"
                            >
                                {`${hour}:00 - ${hour + 1}:00, ${day}`}


                            </div>
                            // {events[day].map((event, eventIndex) => (
                            //         <div key={eventIndex} className="p-2 mt-2 text-white bg-blue-500 rounded-md">
                            //             {event.time} {event.title}
                            //         </div>
                            //     ))
                            // }

                        ))}
                    </div>
                ))}
            </div>
        </div >

    );
}

WeekView.propTypes = {

};

export default WeekView;
