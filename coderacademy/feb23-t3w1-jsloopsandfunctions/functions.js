// //traditional
// function greeter(){
//   console.log("standard message")
// }

// //function funcrionName(parameters) {block of stuff to do}

// /**
//  *
//  * @param {string} customMessage Required! Some message to display.
//  */
// function greeterWithMessage(customMessage){
//   console.log("customMessage is:" + customMessage);
// }

// /**
//  *
//  * @param {string} customMessage Optional. Some message to display in the console.log output.
//  */
// function greeterwithDefault(customMessage = "default message"){
//   console.log("customMessage is:" + customMessage);
// }

// greeterwithDefault();

// greeterwithDefault("some custom message");



// // ES6 style
//Preferred style of notation in newer projects
// /**
//  *
//  * @param {string} customMessage Optional. Some message.
//  */
// let greeterwithDefaultES6 = (customMessage = "default value again") =>{
//   console.log("customMessage is:" + customMessage);
// }

// //Function not executed, just copied around:
// // let storedCustomMessage = greeterWithDefaultES6;

// //Function executed returned value copied around:
// let storedCustomMessage = greeterWithDefaultES6();

// console.log("The returned value from the ES6 function is: " + storedCustomMessage);

// let someComplexVariable = (someValue * someOtherValue - someResultFromSomeFunction())

// //IIFEs

// let someNewFunction = () => {

// }

// let someUserJwt = "blah blah pretend it's a JWT"
// ((someUserJwt) =>
// {
//  // async checkJwtWithAPI(someUserJwt)
//  console.log(someUserJwt);
// }
// )();

// let checkUserJwt = (someUserJwt) => {
//   console.log(someUserJwt);
//  }
//  checkUserJwt();


// (() => {
//   console.log("custome messsage from IIFE:" + customMessage);
// })();

// //callbacks

// let someFuncionWithCallback = (someMessage, someCallback) => {

//   someCallback(someMessage);

// }

// let someFunctionWithCallback("hello world", console.log);

// let someForm = (inputBox, callback) => {
//   callback(inputBox);
// }

// someForm(emailBox, validateEmail);

// //blocks and scope
// different curly brackets mean different sections
// watch out for global and local scopes

// counter = 0; equivalent to below:
// var counter = 0;

// for (let index = 0; index <= 10; index++)
// {
//   let counter = 5;
//   counter++;
// }

// console.log(counter);

// //closures

// function GameData(){

//   let highScore = 0;

//   function setHighScore(newNumber){
//     highScore = newNumber;
// }

//   setHighScore(99);
//   return highScore;

// }

// console.log(GameData());

let eevee = {
  name: "Eevee",
  type: "normal",
  attack: function () {
    console.log("Eevee did an attack!");
  },
  ability: () => {
    console.log("Some ability was triggered!! Woohoo!");
  }
}

// eevee.attack;
// eevee.attack();
// eevee.ability();


// let eeveeAbility = eevee.ability;
// let eeveeCyclingSkillLevel = eevee.hobbies.cycling.skillLevel;
// let {ability, attack, name, type, hobbites: {cycling: {skillLevel}}} = eevee;

// console.log("Eevee's cycling skill level is: " + skillLevel);
// console.log("Eevee cycling skill with dot notation" + eeveeCyclingSkillLevel);


// eeveeAbility();
// ability();

console.log(this);