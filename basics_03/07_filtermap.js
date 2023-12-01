/* const coding =["js","ruby","java","python","cpp"]
const values = coding.forEach((item)=>{
    return item;
})
console.log(values);
//for each doesnt return any values
 */
const myNums =[1,2,3,4,5,6,7,8]
// const newNums = myNums.filter((num)=>num>4)
// console.log(newNums);//if you are using scope then use return keyword
//syntax for foreach loop
/* const newNums =[]
myNums.forEach ((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums); */
// const newNums =myNums.map((num)=>num+10)
// console.log(newNums);
//to perform multiple operation below code is used
/* const newNums = myNums 
        .map((num)=>num*10)
        .map((num)=>num+10)
        .filter((num)=>num>=40)
console.log(newNums); */

//-------reduce------//

const myNums2 =[11,12,13,14,15,16,17,18]
const myTotal =myNums2.reduce(function(accumulator,currentValue){
    console.log(`accumulator:${accumulator} and currentval:${currentValue}`);
    return accumulator+currentValue
},0)
//another way to write the reduce method is
// const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);