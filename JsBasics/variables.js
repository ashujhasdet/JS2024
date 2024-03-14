//Registeration of new user

const accountId = 1234 //const value can not be changed
//Variable declaration : 2 ways
//let is used mainly these days, due to scope problem in var
let emailId = "newuser2024@gmail.com" // variable value can be changed here 
var accountPassword = "123212" // variable value can be changed here
/* 
NOTE: IT IS RECOMMENDED TO USE let OVER var in javascript
      We can also declare a variable without let and var in js but 
      it is not a recommended practice.
      Default value for any variable is undefined in js.
*/

userCity = "New Delhi" // variable value can be changed here
let userState;
console.log(accountId)//approach 1 to print
//we can aslo print using console.table([]) and pass all variables we want to print at once
console.table([accountId,emailId,accountPassword,userCity,])

