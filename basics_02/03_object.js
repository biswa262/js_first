//singleton
//object literals
const mySym = Symbol ("new Key")
const jsUser ={
    name :'biswa',
    age : '21',
    location : 'jatni',
    "adress":'koraput',
    email: 'bskdh@gmail.com',
    isLoggedIn : ["Monday","Saturday"],
    [mySym]:"my new value"
}
// console.log(jsUser.name);
// console.log(jsUser["name"]);
/* these above two  lines will give the same output, when we use .name it automatoically considers the key as string but in case of 
square bracs you've to use "" */
/* using square bracs and "" can be applied to every type of key. for eg if a key is declared in "" like "name" then you can't access
 it using . method so you've to use [""] */
// console.log(jsUser["adress"]);
// console.log(jsUser[mySym]); 
/*if you want to declare a string then you've to use a square brac while defining and while printing use
 the [] w/o strings*/
/* if you won't use [] while defining the keys in the const object it will print the same value but its type wil get changed to string
 instead of symbol */
 jsUser.email ="biswa@jk.com"//syntax to change the value
 jsUser["adress"]= "bhubaneswar"
//  console.log(jsUser["adress"]);
//  console.log(jsUser["email"]);
//  Object.freeze(jsUser)
 /*it will freeze the values of the object, if you assign new values to the key it wont show any error but the changes
will not be propagated*/
jsUser.greeting = function () {
    console.log("hi there");
    console.log(`Your email is ${this.email}` )
}
console.log(jsUser.greeting());//returns hi there
/* now if to use the values defined in the jsUser obj like name and email use `` and {} of js */