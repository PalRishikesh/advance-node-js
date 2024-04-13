let date = new Date();
// console.log(date);


// console.log(month);
let seconds = date.getSeconds();
// console.log(seconds);
let mintues = date.getMinutes();
// console.log(mintues);
let hours = date.getHours();
// console.log(hours);
let day = date.getDay();
// console.log(day);
let singleDate = date.getDate();
// console.log(singleDate);
let month = date.getMonth();
// console.log(month);
let year = date.getFullYear();
// console.log(year);

// let customDate = new Date("3/2/2024 15:25:33") // (month/date/year hour:minute:second)
let customDate = new Date("04-13-2024 15:25:33") // (month-date-year hour:minute:second)
// console.log(customDate);

const monthsName = [
    "January","February","March","April","May","June","July","August","Septmber",
    "October","November","December"
];
// console.log(monthsName[customDate.getMonth()]);

const days = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
];
// console.log(customDate.getDay());
console.log(days[customDate.getDay()]);
