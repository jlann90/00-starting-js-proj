// example of import from file that has multiple exportable itmes: import { apiKey } from "./util.js";
// below is an example of import from file that has a an export of a default (single) item
import apiKey from "./util.js";
console.log(apiKey);

// using 'let' to declare a variable allows for reassignment later, while 'const' is used for variables that should not change
let userMessage = "Welcome to the JavaScript refresher course!";
console.log(userMessage);

// Example of creating a function to greet the user, this example has a default for the message parameter
// If the function is called without a second argument, it will use the default message
function createGreeting(userName, message = "Hello!"
) {
    return "Hi, I am " + userName + ". " + message;
}

// Create two greeting messages using the createGreeting function
const greeting1 = createGreeting("James");
console.log(greeting1);
const greeting2 = createGreeting("Joe", "Hello, what's up?");
console.log(greeting2);

// Example of an arrow function that does the same as createGreeting
// This function also has a default message parameter
export default (userName, message = "Hello!") => {
    return "Hi, I am " + userName + ". " + message;
}