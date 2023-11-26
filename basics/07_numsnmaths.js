let score =400 // in this statement js automatic detects that it is a number
/* but if you have to declare it as a number to remove any possibility of error then you can use the follwing way*/
const over = new Number(300)
//  console.log (score)
//  console.log(over);
/* you can convert the Number to a string and apply string proprties like length */
// console.log(over.toFixed(2))//it will add two zeroes after 300 in decimal ie 300.00
/* toPrecision is used to get precise value */
// const hundreads = 10000000
// console.log(hundreads.toLocaleString())//toLocalString converts the written method as it is written in real world with commas, by default it is us
// console.log(hundreads.toLocaleString('en-IN'));//it prints the indian way of writing
/* console.log(Math.abs(-4));//converts -ve into +ve and keeps the +ves as it is
console.log(Math.round(5.6));//returns the rounded num here 5
console.log(Math.ceil(4.2));//returns the nextbig num here 5
console.log(Math.floor(4.7));//it returns the lowest value of the the number here 4
console.log(Math.max(5,7,6,3))// returns the max num and Math.min returns the smallest */
/* write a js random function to print the numbers betweeb 1 and 6 for a dice game */
/* let min_num=1;
let max_num=6;
console.log(Math.floor(Math.random()* (max_num-min_num+1)) +min_num); */
