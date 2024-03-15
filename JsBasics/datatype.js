"use strict "// means we are following modern version of Js code, not necessary to write but good practice
//alert() ==> we are using node js not browser, so don't use
// Code Readability is importanat
// MDN + Tc39 can be used for reference


//DATATYPES IN JAVASCRIPT
/*
PRIMITIVE DATA TYPES
number 
bigint --> for large number more the 2^53
string 
boolean 
null
undefined   
sysmbol --> to identify any unique component

NON PRIMITIVE DATA TYPE
objects

*/
console.log("DATA TYPES IN JS: ")
let a = 12
let b = 199999999999999999999999999999999
let s = "CODE TEST AUTOMATE"
let b2 = false
let x = null
let name; 

console.log([a,b,s,b2,x])
console.log("-----------------------------------------------------")

// to find data type of any value or variable we can use typeof()
// but typeof(null) is object and typeof(undefined) is undefined
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(s))
console.log(typeof(b2))
console.log(x)
console.log(name)





