//scopes in js
a =300//global variable
if(true){
    let a =10
    const b=20
    // console.log("Inner Value",a);//returns 10
}
// console.log("the value of a is: ",a );//returns 300
//nested function
function one(){
    const userName="biswa"
    function two(){
        const id="86"
        // console.log(userName);
    }
    // console.log(id); //here we can't access id as it is a local
    /* but two() can access the value of userName because for two() values of one() are global */

    two()
}
one()
if(true){
    const userName = "lipesh"
    if (userName === "lipesh") {
        const id = "62135"
        // console.log("Your username is",userName, "and id is", id);
        //console.log(`username is ${userName} and id is ${id}`);
        //these are the two methods to access declared variables in js
    }
    // console.log("the id is",id );//this line can't print the id because the parameter id is out of scope here
}
// console.log("the username is ",userName);//this line cant print the userName because it userName is out of scope here
console.log(addone(7));
function addone(num){
    return num+1
    
}
const addTwo = function(num){
    return num +2
}//although addTwo is a function sometimes it is called a variable or expression
console.log(addTwo(4));
/* the way console statement is written above the function in the addOne function if in the same way write console statement
of the addTwo function above the function declaration then we will get error because in the second case with the function we 
have declared addTwo as a variable and a varibale cant be accessed before it is declared */
