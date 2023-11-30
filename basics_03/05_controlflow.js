const balance =3000
if(balance>500) console.log("test");
//truthy and falsy values
//falsy values list
// false,0,-0, BigInt 0n,"",null,NaN
//truthy values
//"0","false"," ",[],{},function(){},
//nullish coalescing operator (??): undefined
let val1;
val1 =5 ?? 10
console.log(val1);//in this case if the first value is not null so it will get printed but if first one is null then second one will be printed similar to ternary operator
//val1 = undefined ?? 10 returns undefined
//val1 = null ?? 10 ?? 20 //returns 10
//val1 = null ?? null ?? 20 //returns 20
