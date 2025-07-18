// example of import from file that has multiple exportable itmes: import { apiKey } from "./util.js";
// below is an example of import from file that has a an export of a default (single) item
import apiKey from "./util.js";
console.log(apiKey);

// using 'let' to declare a variable allows for reassignment later, while 'const' is used for variables that should not change
let userMessage = "Welcome to the JavaScript refresher course!";
console.log(userMessage);