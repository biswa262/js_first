function myName(){
    // console.log("biswa");
}
myName()
function addNums(number1, number2){
    // console.log(number1+number2);
    return number1+number2
}
const result =addNums(3,7)
// console.log(result);
// console.log(typeof result);
function loginUserMsg(userName){
    if (userName === undefined) {
        console.log("enter username");
    }
    else{
        return `${userName} have now logged in`
    }
}
// const logincnf = loginUserMsg()
// const logincnf = loginUserMsg("biswa")
// console.log(logincnf);
/* if you dont pass any values to the function it reutrns undefined not null */
function listvalue(...prices) {
    return prices;
}
//the above function uses rest parameters and returns the args in an array format
// console.log(listvalue(200,654,864));
//to get the sum of the arguments we can use a loop
function sumvalue(...prices) {
    let sum =0;
    for(let price of prices){
        sum += price;
    }
    return sum;
}
// console.log(sumvalue(200,654,864));
const user ={
    userName:"biswa",
    id:"354"
}
function handleObj(anyObj) {
    // console.log(`username is ${anyObj.userName} and id is ${anyObj.id}`);
}
// handleObj(user);
// handleObj({ //directly passing the values to the function
//     userName:"biswa2",
//     id:"6646"
// })
const myArr =[300,875,523]
function returnSecVal(getArr) {
    return getArr[1]
}
// console.log(returnSecVal(myArr));
const myArr2 =[870,500,200]
function returnsum(...prices){
    let sum =0;
    for (let thesum of prices){
        sum+=thesum
    }
    return sum;
}
console.log(returnsum(...myArr2));//function to return the sum of array elements
