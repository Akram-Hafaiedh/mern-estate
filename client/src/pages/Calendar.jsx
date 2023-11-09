// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import PrimaryButton from "../components/PrimaryButton";
// import SecondaryButton from "../components/SecondaryButton";
// import Dropdown from "../components/Dropdown";
import { useState } from "react";

import DayView from './parts/DayView';
import WeekView from './parts/WeekView';
import YearView from './parts/YearView';
import MonthView from './parts/MonthView';

// import getMonthMatrix from "../utils";

export default function Calendar() {
    const [view, setView] = useState('week'); // 'month', 'day', 'year', 'week'
    return (
        <div className="container p-4 mx-auto">
            {/* Header with view selection */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h1 className="text-2xl font-bold">My calendar</h1>
                </div>
                <div className="space-x-4">
                    <button type="button"
                        className={`text-sm font-medium ${view === 'month' ? 'text-blue-600' : 'text-gray-500'}`}
                        onClick={() => setView('month')}
                    >Month</button>
                    <button type="button"
                        className={`text-sm font-medium ${view === 'day' ? 'text-blue-600' : 'text-gray-500'}`}
                        onClick={() => setView('day')}
                    >Day</button>
                    <button type="button"
                        className={`text-sm font-medium ${view === 'year' ? 'text-blue-600' : 'text-gray-500'}`}
                        onClick={() => setView('year')}
                    >
                        Year
                    </button>
                    <button type="button"
                        className={`text-sm font-medium ${view === 'week' ? 'text-blue-600' : 'text-gray-500'}`}
                        onClick={() => setView('week')}
                    >Week</button>
                </div>
            </div>
            {/* Calendar grid */}
            <div className="flex flex-col">
                {view === 'month' && <MonthView />}
                {view === 'day' && <DayView />}
                {view === 'year' && <YearView />}
                {view === 'week' && <WeekView />}
            </div>
        </div>
    );

    // return (
    //     <div className="container">
    //         <div className="flex flex-wrap items-center justify-between p-3 bg-white">
    //             <p className="p-2 font-bold">
    //                 <span className="pr-2 text-xl">{monthNames[date.getMonth()]}</span>
    //                 <span>{date.getUTCFullYear()}</span>
    //             </p>
    //             <div className="flex items-center justify-center gap-1">
    //                 <SecondaryButton className="inline-flex items-center justify-center gap-1 p-2 text-sm leading-tight text-black bg-white border rounded border-slate-900/10">
    //                     <FaAngleLeft />
    //                     <p>Today</p>
    //                     <FaAngleRight />
    //                 </SecondaryButton>
    //                 <Dropdown options={options} className='uppercase' />
    //                 <div className="hidden w-px h-5 ml-6 mr-3 bg-slate-900/10 sm:block"></div>
    //                 <PrimaryButton className="p-2 text-sm text-white normal-case bg-indigo-600">Add event</PrimaryButton>
    //             </div>
    //         </div>
    //         <div>

    //             <div className="grid grid-cols-7 p-4 text-center">
    //                 {days.map((day, index) =>
    //                     <div className="border" key={index}>{day}</div>
    //                 )}
    //             </div>
    //             <div></div>
    //         </div>
    //         {/* Calendar - {'' + dayName + '-' + dayOfMonth + currentMonthName + currentYear} */}
    //     </div >
    // );
}
