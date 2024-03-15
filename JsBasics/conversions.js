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