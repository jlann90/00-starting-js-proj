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

// Example of using the spread operator to create a new object that extends the user object
const extendedUser = {
    isAdmin: true,
    ...user // Using the spread operator (...) to copy properties from the user object into the extendedUser
}
console.log(extendedUser);

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

// Example of using an array to store hobbies
// Console logging the first hobby in the array
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

// Example of using the push method to add a new hobby to the array
hobbies.push("Working");
console.log(hobbies);

// Examples using spread operator to merge arrays
// The spread operator (...) allows you to expand an array into individual elements, instead of teating each array as a single element which would nest them as sub-arrays
const moreHobbies = ["Gaming", "Traveling"];
const mergedHobbies = [...hobbies, ...moreHobbies];
console.log(mergedHobbies);

// Example of using findIndex to find the index of a specific hobby in the array, in this case "Sports" which returns 0
const index = hobbies.findIndex((item) => {
    return item === 'Sports';
})
// You could also further simplify the arrow function syntax like this:
// const index = hobbies.findIndex((item) => item === 'Sports');
console.log(index);

// Example of using the map method to create a new array with each hobby followed by an exclamation mark, saved to a new variable called editedHobbies
const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);

// Example of using the map method to create a new array of objects, where each object has a text property containing the hobby
// This is useful when you want to work with more complex data structures, such as when you want to display the hobbies in a list or table format
const hobbiesWithKey = hobbies.map((item) => ({text: item}));
console.log(hobbiesWithKey);

// Example of destructuring an array to extract the first and last names of a user
// This is a concise way to assign values from an array to variables, making the code cleaner
const [firstName, lastName] = ["James", "Lannon"];
console.log(firstName, lastName);

// Example of destructuring an object to extract the name and age properties
// This also has an example of how to use an alias for a property, where 'name' is renamed to 'userName'
// This is useful when you want to avoid naming conflicts or when you want to use a more descriptive name for a property
const {name: userName, age} = { name: "James", age: 35 };
console.log(userName, age);