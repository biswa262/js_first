//dates in js
/* let tdate = new Date();
console.log(tdate.toString());
console.log(tdate.toDateString());//returns only the date
console.log(tdate.toLocaleDateString());//returns date in local format */
//date is an object in js
// let mySpecificdate = new Date(2022, 1, 25); //if a specific date is not in a month then it will shift to the next mont
/* for eg if her instead of 25 there is 32 then it will so march 04 as op not 32 feb */
/* console.log(mySpecificdate.toDateString());
let myNewdate = new Date("04-11-2023");//april 11 2023
console.log(myNewdate.toLocaleString()); */

let secondDate = new Date();
console.log(secondDate);
console.log(secondDate.getMonth());
//getMonth returns month in array numbering format like if it is nov then insted of 11 it will give 10, so add 1 for real life usage
console.log(secondDate.getDate());
console.log(secondDate.getMonth()+1);