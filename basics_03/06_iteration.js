// for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
//for of
/* const arr =[3,8,9,7,6]
for (const iterator of arr) {
    console.log(iterator);
} */
/* const greetings ="Hi there"
for (const greet of greetings) {
    console.log(`char is ${greet}`);
} */
//maps 
/* const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);
for (const [key,value] of map) {
    console.log(key,':-',value);
} */
/* const myObj ={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    sw:'swift'
}//forof loop cant be used foor iteration over objs. use forin instead
for (const key in myObj) {
 console.log(`${key} is shortcut for ${myObj[key]}`);
} */
/* const arr = ['c','java','python','js']
for (const key in arr) {
    console.log(key);//returns the index of keys
    console.log(arr[key]);//returns value
} */
/* const coding = ['c','java','python','js']
coding.forEach( function(i) {
    console.log(i);
}) 
coding.forEach((i) =>{
    console.log(i);
}) forEach can have parameters like item,index,arraylist*/
const myCoding =[
{
    lang:"js",
    id:"1"
},
{
lang:'c',
id:"2"
},
{
lang:'cf',
id:"3"
},
{
lang:'ce',
id:"4"
},
]
myCoding.forEach((item)=>{
    console.log(item.lang);
})