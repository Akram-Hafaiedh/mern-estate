import PropTypes from 'prop-types';
import { transformString } from '../utils';

const DayCell = ({ day, isCurrentDay, isPreviousMonth, isNextMonth }) => (
    <div
        className={
            ` border-gray-200 p-2 border flex items-center justify-center text-semibold ${isPreviousMonth || isNextMonth ? 'bg-gray-200/60 text-gray-400' : ''} ${isCurrentDay ? 'rounded-full bg-violet-500 text-white font-bold' : ''}`
        }>
        {day}
    </div>
);

DayCell.propTypes = {
    day: PropTypes.number,
    isCurrentDay: PropTypes.bool,
    isPreviousMonth: PropTypes.bool,
    isNextMonth: PropTypes.bool,
}




const SmallMonthView = ({ month, year, startDayOfWeek }) => {

    const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // const [selectedStartDay, setSelectedStartDay] = useState('Sun');
    const startDayIndex = daysInWeek.indexOf(transformString(3, startDayOfWeek));
    // const orderedDaysInWeek = !startDayIndex
    //     ? daysInWeek
    //     : [...daysInWeek.slice(1), daysInWeek[0]]

    const orderedDaysInWeek = [
        ...daysInWeek.slice(startDayIndex),
        ...daysInWeek.slice(0, startDayIndex)
    ];

    // Assuming month is 0-indexed (i.e., January is 0, February is 1, etc.)
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPreviousMonth = new Date(year, month, 0).getDate();
    // Create an array from 1 to daysInMonth   
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // get the current day
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // const showPreviousDays = startDay !== 0;

    const startDay = new Date(year, month, 1).getDay();
    let daysFromPrevMonth;

    if (startDayIndex === 1) {
        daysFromPrevMonth = startDay === 0 ? 6 : startDay - 1;
    } else {
        daysFromPrevMonth = startDay - startDayIndex;
    }
    // const daysFromPrevMonth = (startDay + 6 - startDayIndex) % 7;
    const showPreviousDays = daysFromPrevMonth > 0;

    const previousDays = showPreviousDays
        ? Array.from({ length: daysFromPrevMonth }, (_, i) => daysInPreviousMonth - daysFromPrevMonth + i + 1)
        : [];

    // const totalCells = 7 * 6;
    // const currentMonthCells = showPreviousDays ? 7 + days.length : days.length

    const remaningCells = 7 * 6 - previousDays.length - days.length;
    // const remaningNextDays = nextDays.slice(0, remaningCells);
    const remaningNextDays = Array.from({ length: remaningCells }, (_, i) => i + 1)


    const lastWeekOfPrevMonth = previousDays.slice(-7);

    // array Of cells
    // const cells = [
    //     ...lastWeekOfPrevMonth.map((day) => (
    //         <DayCell key={`prev-${day}`} day={day} isPreviousMonth={true} />
    //     )),
    //     ...Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
    //         <DayCell key={`current-${day}`} day={day} isCurrentDay={day === currentDay && month === currentMonth && year === currentYear} />
    //     )),
    //     ...remaningNextDays.map((day) => (
    //         <DayCell key={`next-${day}`} day={day} isNextMonth={true} />
    //     )),
    // ];




    return (
        <div className='mt-6'>
            {/* <div className=''>{month}</div> */}
            <div className="grid grid-cols-7 grid-rows-1">
                {orderedDaysInWeek.map((dayName, idx) => (
                    <div key={idx}
                        className='flex items-center justify-center p-2 text-sm font-semibold'>
                        {transformString(1, dayName)}
                    </div>
                ))}
            </div>
            {/* first row : nth-chid(-n+7)  */}
            {/* last row : nth-chid(-n+36)  */}
            {/* first col : nth-chid(7n+1)  */}
            {/* last col : nth-chid(7n) or nth-last-child(-n+7) */}
            <div className={`
                [&>*:nth-child(7n+1)]:border-l-0 
                [&>*:nth-child(7n)]:border-r-0 
                [&>:nth-child(-n+7)]:border-t-0 
                [&>:nth-last-child(-n+7)]:border-b-0 
                rounded-lg grid grid-cols-7 grid-rows-6 border shadow-md hover:shadow-lg
                ${month === currentDate.getMonth() && year === currentDate.getFullYear() ? 'border-gray-800 border-2' : ''} `}>
                {/*  days from previous month */}
                {showPreviousDays && lastWeekOfPrevMonth.map((day) => (
                    <DayCell key={day} day={day} isPreviousMonth={true} />
                ))}

                {/* current month */}
                {days.map((day) => (
                    <DayCell key={day} day={day} isCurrentDay={day === currentDay && month === currentMonth && year === currentYear} />
                ))}

                {/* days from next month */}
                {remaningNextDays.map((day) => (
                    <DayCell key={day} day={day} isNextMonth={true} />
                ))}

                {/* {cells} */}
            </div>
        </div>
    );
};


SmallMonthView.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    startDayOfWeek: PropTypes.string
};


export default SmallMonthView;
