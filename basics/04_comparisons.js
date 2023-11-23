console.log(null==0);//returns false
console.log(null>=0);//true 
console.log(null>0);//false
/* comparison operator converts null into number not equality operator */
console.log(undefined==0);//returns false
console.log(undefined>=0);//false
console.log(undefined>0);//false
console.log(undefined<0);//false
//=== checks the operands and their data types
const id=Symbol('124')
const secId=Symbol('124')
console.log(id==secId);//returns false as every Symbol() call creates an unique symbol
