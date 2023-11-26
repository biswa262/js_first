/* stack (primitive) heap (non primitve) */
let myName = "biswa"
let anotherName = myName
anotherName = "biswa2"
console.log(myName)
console.log(anotherName);
/* if anootherName is not assigned any value then both these lines will print biswa but if it is assigned value then  1st
statement will print biswa while the second one will print biswa2 of os beacuse anotherName was assigned a copy of myName*/
let userOne={
    email:"biswa@gmail.com",
    id:"6555"
}
let userTwo=userOne
console.log(userOne)
console.log(userTwo);
/* bothe these console statements will print the same email and id beacuse here the data is stored in a heap memeory
and the variables userOne and userTwo refers two to the same reference in the heap memory */
/* stack contains only primitive data type and heap contains non primitive data type */