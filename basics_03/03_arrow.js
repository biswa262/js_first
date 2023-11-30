const user={
    username :"lokesh",
    id:"3387",
    welcomeMsg : function(){
        // console.log(`welcome ${this.username}`);
    }
}//this keyword is used for current context
user.username ="prakash"//as we have used the this keyword it will take the current context and if we remove this line lokesh will be printed
user.welcomeMsg()
/* if we print this then we will get the empty object in the node environment and when run on browser we get the window as global object */
/* this doesnt work inside a function it works in objects */

// function chai (){
//     let username="suresh"
//     console.log(this.username);
// }
//declaration of an arrow function
const chai = ()=>{
    let username="suresh"
    // console.log(this.username);
}
const addNums =(num1,num2)=>{
    return num1+num2;
}
// console.log(addNums(3,7));
//implicit return type arrow function below
const addTwoNums =(num1,num2)=> num1+num2;
// const addTwoNums =(num1,num2)=> (num1+num2);
//its your choice if you want to add brackets or not as shown
console.log(addNums(3,7));