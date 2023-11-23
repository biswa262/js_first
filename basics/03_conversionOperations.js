let score ="46"
/*below are the two ways in which you can print the typeof*/
//console.log(typeof score);
//console.log(typeof(score));
/* if a number is written in "" then that will be considered as a string */
let valueInNumber = Number(score);//it will convert the string into number
//console.log(score);
//console.log(typeof valueInNumber);//it will return the type of score as number
/* but when you try to print the valueInNumber it will return NaN */
/* suppose score ="46abc" and we convert it into a number then it will get converted but the value will be NaN when printed */
/* if score=null we will get 0 and for undefined we will get NaN */
/* if there is only string then we will ger NaN*/
let isLoggedin =1;
let booleanIsLoggedIn = Boolean(isLoggedin);
//console.log(typeof booleanIsLoggedIn);/* this line will give boolean */
//console.log(booleanIsLoggedIn)/* this line will return true here and if the value is 0 this will print false */
/* if we give the value of isLoggedin an empty string then it will return false but the string has some values then it will 
return true */
let Anumber = 78
let StringConvert = String(Anumber);/* converts the number to string */
console.log(StringConvert);/* the output is 78 but its been converted to a string */
console.log(typeof StringConvert)/* the output is string as its been converted */
console.log(+true);/* returns 1 */
console.log(+"");/* returns 0 */