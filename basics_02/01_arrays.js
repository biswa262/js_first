const myArray = [4,7,8,5,6]
//js arrays are resizable and can contain a mix of different data types
//array methods
// myArray.push(3)//pushes an element at the end
// myArray.pop()//pops out the last element
// myArray.unshift(9)//add an element at the starting of the array
// myArray.shift()//remove element from starting of the array
// console.log(myArray);
/* there are other methods like indexof() includes() returns index of the given number and includes returns ans in boolean*/
/* array.join() this method helps to convert the string into an array */
let myNewArr = new Array()
myNewArr.push(8);
myNewArr.push(4);
myNewArr.push(9);
myNewArr.push(3);
myNewArr.push(1);
console.log(myNewArr);
let myn1 = myNewArr.slice(2,3)
console.log(myn1);/* the splice method changes the original array where as the slice method performs on the reference copy */
console.log(myNewArr);
let myn2 =myNewArr.splice(2,3)//syntax of splice(fromindex,number of elements)
console.log(myn2);
console.log(myNewArr);
