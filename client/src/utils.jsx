// const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// const weekFull = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


export function transformString(number, string) {
    const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    const resultString = capitalizedString.substring(0, number);
    return resultString;
}

// console.log(transformString(3, 'Sunday'));
// console.log(transformString(3, 'Sunday'));
// console.log(transformString(1, 'sunday'));
// console.log(transformString(3, 'Monday'));
// console.log(transformString(3, 'monday'));
// console.log(transformString(1, 'monday'));