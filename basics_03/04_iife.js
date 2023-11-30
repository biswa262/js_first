//immediately invoked function expressions
(function chai(){
console.log(`db connected`);//iife is used to prevent the pollution from the global varibale
})(); //syntax of iife is (function)(execute); the end semi-colon is important to end the code

(()=>{
    console.log(`db 2 connected`);
})();