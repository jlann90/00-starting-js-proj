// example of import from file that has multiple exportable itmes: import { apiKey } from "./util.js";
// below is an example of import from file that has a an export of a default (single) item
import apiKey from "./util.js";
console.log(apiKey);

// using 'let' to declare a variable allows for reassignment later, while 'const' is used for variables that should not change
let userMessage = "Welcome to the JavaScript refresher course!";
console.log(userMessage);

// Example of creating an object to represent a user, and a function that states the user's name
// The object uses the "this" keyword to refer to its own properties
// The greet method uses the "this" keyword to access the name property of the user object
const user = {
    name: "James",
    age: 35,
    greet(){
    console.log("Hello, I am " + this.name + ".");
    }
};

console.log(user.name);
user.greet();

// Example of creating a class to represent a user, with a constructor to initialize properties
// The class has a method called greet that logs a greeting message to the console
// The class is instantiated to create a user object, which is then logged to the console
// This is a more structured way to create objects in JavaScript, especially when you need to create multiple instances with similar properties and methods
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;}

        greet() {
            console.log('Hi!')
        }
    }

const user1 = new User("James", 35);
console.log(user1);


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