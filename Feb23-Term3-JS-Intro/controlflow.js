// if (true){
//   console.log("controlflow file loaded");
// }

// let shortCircuitExperiment = null ?? 2
// console.log(shortCircuitExperiment);

// let authResponse = null;
// let errorResponse = {
//   code: 401,
//   message: "Auth went bad."
// }

// let someAuthExample = authResponse ?? errorResponse;
// console.log(someAuthExample);
// if (someAuthExample.code == 401){
//   console.error("Login error occured!");
// }


// if (0 || false){
//   console.log("control short circuit condition");
// } else {
//   console.log("if was given a 'false' so didn't run");
// }

// let someValue = "true"

// // truthy checking
// if (someValue) {
//   console.log("someValue has a messsage!! It is: \n" + someValue);
// }

// // equality checking
// if (someValue == true){
//   console.log("the someValue string equalled a true boolean value");
// } else {
//   console.log("the someValue string did Not equal a true boolean value");
// }

/*
syntax for our if
if someValue
  print("tada!")

  if (someValue) {
    console.log("tada!");
}
*/

// let choice = prompt("what is your favourite colour?")
// switch (choice) {
//   case "blue":
//     alert("No way! That's the colour of the sky!");
//     break;
//   case "green":
//     alert("That's not very creative.");
//   case "red":
//     alert("That's a speedy colour!");
//     break;
//   default:
//     alert("...That doesn't seem like a cool colour");
//     // break;
// }

let ternaryResylt = true ? console.log("true is truthy") : console.log("it was falsy!");

/*

return isUserLoggedIn() ?
<html for true>
blah blah whatever user is logged in, show their account details
</html>
:
<html for false>
redirect to login screen
</html>
*/


let ifElseResult = null;
if (true) {
  ifElseResult = console.log("true is truthy");
} else {
  ifElseResult = console.log("false is falsy");
}