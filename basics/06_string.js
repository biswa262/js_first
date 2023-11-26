let name = "biswa"
let adress ="korput"
console.log(`My name is ${name} and adress is  ${adress}`);//use backticks to use js variables in a string
let cityName = new String ("jeypore")//this line converts the string into an object
console.log(cityName[0])//this will return the element at the 0th index because now string has been converted into an obj
/* after converting the string into an obj you can use the js methods like the length,charAt etc */
/* if you are using indexOf() then the element whose position you need to find should be put in a quote like string */
/* if you are using charAt() then if you put 3 inside the bracs then it will return you the char at that position */
let vehicle = " tata harrier "
console.log(vehicle);
console.log(vehicle.trim());
/* .trim() only trims the strig from the starting and the ending part we can use trimEnd() or trimStart as per need */
console.log(vehicle.replace('r','p'));//op will be tata haprier as replace method only replces the first occurance as default
/* to replace all the occurance we can use console.log(vehicle.replace(/r/g, ‘p’)); */
console.log(vehicle.includes('maruti'));//this returns the data in booleans
