// const flipkartuser = new Object();
const flipkartuser2 = {}
/* these two are the ways to declare the objects 1st one is the singleton type where as the other one is not*/
flipkartuser2.id ="123abc"
flipkartuser2.name ="biswa"
flipkartuser2.isLoggedIn = false
// console.log(flipkartuser2);
//nesting in object
const anotherUser={
    email:"biswa@gmail.com",
    userName :{
        firstName:"Biswajit",
        lastName:"Mandal"
    }
}
// console.log(anotherUser.userName.firstName);//you can access these nested objects by extending the . method
const obj1 = {1:"a",2:"b",3:"C"}
const obj2 ={3:"d",5:"e",6:"f"}
// const obj3 = Object.assign(obj1,obj2)//Object.assign(target,source)
// console.log(obj3);
/* here in the above code the output will be { '1': 'a', '2': 'b', '3': 'd', '5': 'e', '6': 'f' } beacuse the values of obj2 overrides the values of obj1 with same key due to Object.assign()*/
// const obj3 =Object.assign({},obj1,obj2)//second method of concating two objs
// console.log(obj3);
// const obj3 ={...obj1,...obj2}
// console.log(obj3);//spreads the objs
const users =[
    {
        id:1,
        email:"ai8@gmail.com"
    },
    {
        id:2,
        email:"ai9@gmail.com"
    } ,  
    {
        id:3,
        email:"ai7@gmail.com"
    }

]
users[1].email
// console.log(flipkartuser2);
// console.log(Object.keys(flipkartuser2));//returns the keys
// console.log(Object.values(flipkartuser2));//returns the values of the keys
// console.log(Object.entries(flipkartuser2));//returns data in an array of key-value pair
// console.log(flipkartuser2.hasOwnProperty('isLoggedIn'));//if checks if key is present and returns boolean value
//destructuring value of an object
const course ={
    teacherofthecourse :"biswa",
    duration:"6months",
    price:"599"
}
const {teacherofthecourse:inst}=course//with this syntax we can call teacherofthecourse as inst
console.log(inst);
