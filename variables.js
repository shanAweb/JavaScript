// var, let and const are the three ways to declare variables in js
let firstName="Josh"
console.log(firstName) //this will log Josh on console
// Now
firstName="Jack"
console.log(firstName) //Jack will be logged on console
// hence, value of let can be changed
var teamName="Web Force"
console.log("Web team name is " + teamName);
teamName="Web JS Force";
console.log("Web team name is " + teamName); //var value changed here

// var and let has a scope difference

// what if we don't to change the values; const is here
const interestRate=0.3; //This value cannot be changed, if we try it, we will get an error
// interestRate=1;   Error will be here
console.log("Interest rate is " + interestRate)