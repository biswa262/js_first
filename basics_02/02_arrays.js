//you can push an array inside an array in js [7,8,3,[1,6,4]]
let arr1=["apple","melon","mango"]
let arr2=["potato","onion","garlic"]
let arr3= arr1.concat(arr2);// this will return [ 'apple', 'melon', 'mango', 'potato', 'onion', 'garlic' ]
// console.log(arr3);//but if you push the output will be [ 'apple', 'melon', 'mango', ['potato', 'onion', 'garlic'] ]
/* if there is an array like [7,8,3,[1,6,4]] and if you use .flat() method then the op will be [7,8,3,1,6,4] */
/* isArray returns a boolean value of whether the input is an array or not */
/*  .from("biswa") returns the input as a individual element of the array ["b","i","s","w","a"]*/

let score =100
let score2 =200
let score3 =300
// console.log(Array.of(score,score2,score3));//it returns the assigned values of scores as an array
/* other example of Array.of is  below */
const group = ['fruits','veggies','pizza',2]
console.log(Array.of(group));
console.log(Array.of('foo', 2, 'bar', true));