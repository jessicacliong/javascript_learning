/* Fetch API requres a discussion of 
Callbacks, Promises, Thenables, and Async/Await */


// -------------------CALLBACKS------------------------ //

/* 

Functions that are passed to other functions as parameters.
They will call that function after they finish doing their function

Eg. the callback written below is a function 

*/


// function firstFunction(parameters, callback) {
//      // do stuff with the parameters
//      callback();
// }


/* 

This callback allows us to call a function that in turn will call another function
that sets a change of events to occur

AKA "callback hell" 

*/


// firstFunction(parameters, function() {
//      // do stuff
//      secondFunction(parameters, function() {
//           thirdFunction(parameters, function() {
//           });
//      });
// }); 




/* This is not an ideal format of functions in code. 
It becomes hard to read your code and understand the flow
 */





// ------------------------PROMISES------------------------ //

/* 

Has 3 states:
1. Pending
2. Fulfilled
3. Rejected
 

Promises deliver async codes as a definite execution of code (like a promise in real life is delivered).
Though within asynchronous javascript, code runs one line at a time, promises are definite blocks of code which will be executed.

asynchronous and promises will be executed at once when code runs, 
A promise function could be pending whilst other js code goes ahead, hence there will be 2 different working blocks of code, but the results are displayed at different time periods.  

*/



// const myPromise = new Promise((resolve, reject) => {
//      const error = false;
//      if (!error) {
//           resolve("Yes! resolved the promise!");
//      } else {
//           reject("No! Rejected the promise.");
//      }
// }); 


// console.log(myPromise);


/* 

When we run this code, we would expect to get the resolved Yes statement in our console log,  but in fact will just show the state of the promise block (which is fulfilled) not a return of the value of the variable as we expect 

To get the value out of a promise, we need to chain the callbacks together.
These callbacks are called thenables. 
So we would chain thenables with one another.

// ------------------------THENABLES------------------------ // 

*/


// myPromise.then( value => {
//      console.log(value);
// })


/* 

Now we can see the resolve returns from the promise, which is a yes resolve.

With thenables we can add another then and call it something else.

*/



// myPromise.then(value => {
//      return value + 1;
// })
// .then(newValue => {
//      console.log(newValue);
// })


/* 

Now we see the resolve result with a number one after it (Yes! resolved the promise!1) 


With a fetch api, this returns a promise on its own. We don't have to create a new promise


Fetch works similarly when using asynchronous code using timeout in javascript. This is to delay the execution of some code until a set time period has lapsed. 

*/


// const myNextPromise = new Promise((resolve, reject) => {
//      setTimeout(function() {
//           resolve("myNextPromise resolved!");
//      }, 3000);
// });

// myNextPromise.then(value => {
//      console.log(value);
// });

// myPromise.then(value => {
//      console.log(value);
// });


/* 

The result we get when the result is run in the console is we resolve the first promise (myPromise) then 3 seconds later, myNextPromise is resolved though we called myNextPromise first in order. 

This goes to show that javascript is not built to wait, but we can overcome that by coding a promise in the block of code after all synchronnous codes have been executed. 


-----------------------Pending State of Promises-----------------------

This is best illustrated using a fetch api

*/


// const users = fetch("https://jsonplaceholder.typicode.com/users");

// console.log(users);


/* 

Now fetch is a promise function that requests data from another place on the web.  

In the code above the result would be a pending state of the promise as we're going to log the result of the promise right away. We don't want to do this when we're actually working with the data from a promise. 

However this will display the state of the promise

And in this case the promise of this function is "pending".

Pending means the code is still being worked on, slower to execute and allows other asynchronous code to execute first. 

We finish up the promise function by using thenables and an action to output from the function. 

*/



// const users = fetch("https://jsonplaceholder.typicode.com/users")
//      .then(response => {
//           console.log(response);



/* 

At this point, the response is still not able to be worked with.

We want json to work with the data, so have to code that in the return
And we call the json method to do that. 

*/



// const users = fetch("https://jsonplaceholder.typicode.com/users")
//      .then(response => {
//           return response.json();
//      })
//      .then(data => {
//           data.forEach(user => {
//                console.log(user);
//           })
//      });


/* 

We get 10 objects back from the api and we can see each one of the information from this api.  

So for every information fetched from the API, it needs to be turned into json data and then we can work with it from there. 

We can use the forEach loop to log each user data. 

*/


// const users = fetch("https://jsonplaceholder.typicode.com/users")
//      .then(response => {
//           return response.json();
//      })
//      .then(data => {
//           data.forEach(user => {
//                console.log(user);
//           })
//      });

// console.log(users);


/* 

We cannot execute this code either as this will return the same "pending" state as earlier mentioned after that the results of the api data in the json format.  

The last console.log(users) code does not wait for the fetch promise function.

*/



// ------------------------ ASYNC / AWAIT ------------------------ //


/* 

We next encounter a problem, though a less painful experience than callback hell, when we have a chain of thenables where we have a .then and another .then and another .then. This is also not desirable format of code to write.

This is where Async and Await functions solves this problem. 


Async and await allows for cleaner coding of a .then by commanding the code to wait for X to happen before doing Y. 

*/


// const myUsers = {
//      userList: []
// }

// const myCoolFunction = async () => {
//      const response = await fetch("https://jsonplaceholder.typicode.com/users");
//      const jsonUserData = await response.json();
// //      console.log(jsonUserData); - we can console.log here to see the output on our terminal
//      return jsonUserData;
// }

// myCoolFunction();


/* 

When we run this function, we get the same results as we've obtained if we did the same chain of thenables earlier.  

*/

// const anotherFunc = async () => {
//      const data = await myCoolFunction();
//      myUsers.userList = data;
// }

// anotherFunc();
// console.log(myUsers.userList)


/* 

When we log this code, we see that we're not outputing a result in this function.  

*/  


// const anotherFunc = async () => {
//      const data = await myCoolFunction();
//      myUsers.userList = data;
// //      console.log(myUsers.userList);
// }

// anotherFunc();
// console.log(myUsers.userList)


/* 

If we run the code with console.log function outside of the anotherFunc function, the output does not show as it did in the previous example, 
as myCoolFunction is waiting on anotherFunc to execute and anotherFunc is also waiting for other asyncrhonous functions to execute. 
For the code to execute, we need to put the console.log statement within the anotherFunc function, not outside.  

Just because the anotherFunc() code is run at the bottom of the code, doesn't mean that the console.log(myUsers.userList) line of code is going to wait for those promises to resolve. 

*/


// -------------------------Workflow Function ---------------------------


// const getAllUserEmails = async () => {

//      const response = await fetch("https://jsonplaceholder.typicode.com/users");
//      const jsonUserData = await response.json();

//      const userEmailArray = jsonUserData.map(user => {
//           return user.email;
//      });
     
//      // console.log(userEmailArray);
//      return userEmailArray;
// }

// console.log(getAllUserEmails());


/* 

In this instance, the same result is obtained like previous examples. 
What is displayed in the console log is the state of the fetch request (which is pending) and no results are displayed, unless we console.log the user email array inside the async await function, as they are not awaiting the promises to fulfill, so it is still pending and will not work

The code above WILL NOT display the desired results. 
But the code below will. 

*/


// const getAllUserEmails = async () => {

//      const response = await fetch("https://jsonplaceholder.typicode.com/users");
//      const jsonUserData = await response.json();

//      const userEmailArray = jsonUserData.map(user => {
//           return user.email;
//      });
     
//      console.log(userEmailArray);
//      // return userEmailArray;
// }

// getAllUserEmails();


// -------------------2nd parameter of Fetch is an object-------------------------

// const getDadJoke = async () => {

//      const response = await fetch("https://icanhazdadjoke.com/", {
//           method: "GET",
//           headers: {
//                Accept: "application/json"
//           }
//      });

//      const jsonJokeData = await response.json();

//      console.log(jsonJokeData);
// }

// getDadJoke();


/* When we console.log this we get the full json response from the API. 
We can also log just the joke from the API in the console log by calling on 
.joke */

// const getDadJoke = async () => {

//      const response = await fetch("https://icanhazdadjoke.com/", {
//           method: "GET",
//           headers: {
//                Accept: "application/json"
//           }
//      });

//      const jsonJokeData = await response.json();

//      console.log(jsonJokeData.joke);
// }

// getDadJoke();

/* We can also log in the joke as a text instead of a json form with the id, joke and the status */

// const getDadJoke = async () => {

//      const response = await fetch("https://icanhazdadjoke.com/", {
//           method: "GET",
//           headers: {
//                Accept: "text/plain"
//           }
//      });

//      const textJokeData = await response.text();

//      console.log(textJokeData);
// }

// getDadJoke();

/* To post a joke to the API, we can change the method to "POST" and determine the content-type to post to the API endpoint */


// const jokeObject = {
//      id: "0oO71TSv4Ed",
//      joke: "Why was it called the dark ages? Because of all the 
//      knights."
// }

// const postData = async (jokeObj) => {

//      const response = fetch("https://httpbin.org/post", {
//           method: "POST",
//           headers: {
//                "Content-Type": "application/json"
//           },
//           body: JSON.stringify(jokeObj)
//      });
//      const jsonResponse = await response.json();

//      console.log(jsonResponse.headers);
// }

// postData(jokeObject);



/* To request a joke object from the API, we can code up the following
async and await function. And we can specify the exact search of the joke we would like in the function */


// const requestJoke = async (firstName, lastName) => {

//      const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
//      const jsonResponse = await response.json();

//      console.log(jsonResponse.value);
// }

// requestJoke("Clint", "Eastwood");



/* To obtain just the joke, we can type the joke object after value in the console log of the json response. */


// const requestJoke = async (firstName, lastName) => {

//      const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
//      const jsonResponse = await response.json();

//      console.log(jsonResponse.value.joke);
// }

// requestJoke("Clint", "Eastwood");


/* We can change around the name of the joke request to what's suited to us.
*/

// -------------------------Abstract into functions-------------------------

/* We can request a joke from a form based on a submit event */

// const getDataFromForm = async () => {
//      const requestObj = {
//           firstName: "Bruce", 
//           lastNAme: "Lee",
//           categories: ["nerdy"]
//      };
//      return requestObj;
// }

// const buildRequestUrl = (requestData) => {
//      return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
// }

// const requestJoke = async (firstName, lastName) => {

//      const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);
//      const jsonResponse = await response.json();

//      console.log(jsonResponse.value.joke);
// }

// requestJoke("Bruce", "Lee");


/* We can just use url in the requestJoke function and this will print more than 1 joke */

// const getDataFromForm = async () => {
//      const requestObj = {
//           firstName: "Bruce", 
//           lastNAme: "Lee",
//           categories: ["nerdy"]
//      };
//      return requestObj;
// }

// const requestJoke = async (url) => {
//      const response = await fetch(url);
//      const jsonResponse = await response.json();
//      const jokeArray = jsonResponse.value
//      console.log(joke);
// }

// requestJoke("Bruce", "lee");

/* If we were to print just one joke, we could code it up as follows below. We can also post the joke to a page instead of just console logging it: */


// const buildRequestUrl = (requestData) => {
//      return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
// }

// const requestJoke = async (url) => {
//      const response = await fetch(url);
//      const jsonResponse = await response.json();
//      const joke = jsonResponse.value.joke;
//      postJokeToPage(joke);
// }

// const postJokeToPage = (joke) => {
//      console.log(joke);
// }

// // Procedural "workflow" function
// const processJokeRequest = async () => {
//      const requestData = getDataFromForm();
//      const requestUrl = buildRequestUrl(requestData);
//      await requestJoke(requestUrl);
//      console.log("finished!");
// }

// processJokeRequest();


/* 
This will be the function that would be called by an event listener instead of the get data from form, say if there was a click on the submit button or the submit value.
So we've broken out all the commands into functions so they could work one at a time. This is called a procedural workflow.

Abstracting this lets us build different request url if we need to by getting different data and we can also asign different names to the request 

And the procedural workflow function pulls it all together and the function is called at the very bottom of the code. 

*/

