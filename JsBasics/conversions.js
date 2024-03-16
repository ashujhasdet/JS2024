//we have seperate methods for conversion for each data type such as for number use "Number()" etc.
//string of number to number 
let a = "39"
console.log("value of a before conversion = "+a) 
console.log("data type before = "+typeof (a)) //string
let convert1 = Number(a) //typecast

console.log("value after = "+ convert1)
console.log("data type after= "+typeof (convert1))//number
console.log("----------------------------------------------------------------------")
//alphanumberic string to number data type
let b = "23abcd"
console.log("b before conversion = "+ b)
console.log("type of b before = "+typeof(b))//string
//typecast
let conv2  = Number(b)
console.log(" value after conversion = "+ conv2)// NaN (special type)
console.log("type after conversion = "+ typeof(conv2))//number

console.log("----------------------------------------------------------------------")
//null to number
let c = null
console.log("Value of c before conversion = "+ c)//null
console.log("type of c before = "+typeof(c)) // object

let c3 = Number(c)
console.log(" value after conversion = "+ c3)//0
console.log("Type after conversion = "+ typeof(c3))//number
console.log("----------------------------------------------------------------------")

//undefined to number
let d = undefined
console.log("Value of d before conversion = "+ d)//undefined
console.log("type of d before = "+typeof(d)) // undefined

let c4 = Number(d)
console.log(" value after conversion = "+ c4)//NaN
console.log("Type after conversion = "+ typeof(c4))//number
console.log("----------------------------------------------------------------------")

//boolean to number 
//true --> 1; false --> 0
let e = true
console.log("value of e before = "+ e)
console.log("type of e before = "+typeof(e))
let c5 = Number(e)
console.log("value after = "+ c5)
console.log("type after = "+ typeof(c5))
console.log("----------------------------------------------------------------------")
// Note: 1 -> true; 0->false
//empty string to boolean
let s1=""//empty string 
console.log("Value before = "+s1)//
console.log("type before ="+typeof(s1))//string
let c6 = Boolean(s1)
console.log("Value after = "+ c6)//false
console.log("type after = "+ typeof(c6))//boolean
console.log("----------------------------------------------------------------------")
//Normal character string to boolena
let s2="Aashu"//Non-empty string 
console.log("Value before = "+s2)//Aashu
console.log("type before ="+typeof(s2))//string
let c7 = Boolean(s2)
console.log("Value after = "+ c7)//true
console.log("type after = "+ typeof(c7))//boolean
console.log("----------------------------------------------------------------------")
//number to string
let num = 123
console.log("Vlaue before = "+ num) //123
console.log("Type before = "+typeof(num) )//number
//typecast
let str = String(num)
console.log("value after ="+str)//123
console.log("type after = "+ typeof(str))//string
console.log("----------------------------------------------------------------------")

// XXXXXXXXXXXXXXXXXXXXXXXXXX OPERATIONS IN JS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
console.log("Simple arithemetic operations")
let x = 1000
let y = 200
console.log("x = "+ x)
console.log("y = "+y)
console.log("Addition Result = "+(x+y))
console.log("Subtraction Result = "+(x-y))

console.log("Multiplication Result = "+(x*y))

console.log("Division Result = "+(x/y))//Gives quotient

console.log("Modulus Result = "+(x%y))//Gives remainder

console.log("Power Result = "+(x**y))

//Concatenation Operation
//Two Strings
let str1 = "My name is :"
let str2 = " Aashutosh Jha" 
console.log(str1 + str2);
/*     
While concatenating if first value is string then every thing in concatenation is treated as String
If string value is present in last then all the before operation is done then concatenated as string to last string value.

NOTE: It is very important to write a clean and readable code.
(2*3+5%4) X
((2*3)+(5%4)) is better
*/

//string + number
console.log("a"+2)
console.log("20"+24)
//number + string
console.log(20+" 24")
console.log(20+ " Years")
// string + number + number
console.log("hello "+ 20 + 24)
console.log("23"+2+2) 
//number + number + string
console.log(2+ 18 + "24")
console.log("----------------------------------------");

//X--------------------------COMPARISONS------------------X//

// In Js it is not compulsory to have same data type of two values under comparison, Js does 
//implict conversion and then compare and then give a true/fale result.
//However this may lead to unpredictable result sometime

//string and number comparison 
console.log("2">8)//string--> Number ---> Then Compare --> false

//comparison including null
console.log(null>0)
console.log(null==0)
console.log(null>=0)//unpredictable --> here first null is converterd to 0 and then compared 

console.log("-----------Strict Check----------")
//Strict check === , it check equality and data type both
console.log("4"==4)//true
console.log("4"===4)//false

// ALWAYS TRY TO COMPARE SIMILAR DATA TYPE 





