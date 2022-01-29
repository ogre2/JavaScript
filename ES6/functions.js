/**
 * With ES6 JavaScript introduced a new way of constructing anonymous functions through
 * arrow syntax. But first, we need to briefly explain what anonymous functions are.
 * 
 * Sometimes when we write functions, we don't need to name them, especially when we pass a 
 * function as an argument into another function. We create what are called inline functions,
 * which are not named because we tend to not reuse them anywhere else in our code.
 * Below is an example of how we traditionally write an inline function.
 */
const inlineFunc = function()
{
    const myVar = "words";

    return myVar;
}

/**
 * ES6 uses the new arrow function syntax to streamline how we create inline functions, primarily,
 * it allows us to omit the function keyword altogether. Here's an example below.
 */
const myFunc = () =>
{
    const myVar = "words";

    return myVar;
}

/**
 * Furthermore, arrow functions allow us to omit the return keyword as well as the brackets surrounding our
 * code altogether. This helps us to extremely simplify the inline function. Example below
 */
const someFunc = () => "words";
// The above will return the string value by default.

/** 
 * Below is an example of an inline/anonymous function written traditionally, and then rewritten with
 * full arrow function syntax as broken down above.
 */
const newDate = function()
{
    return new Date();
}
// Below is the newDate function rewritten using arrow function syntax
const newDate = () => new Date();

/**
 * The two function examples above will do the exact same thing, they only differ in how expanded their
 * code blocks are.
 */

/* -----------------------------------------------------------------------------------------------------------*/

/**
 * Much like regular functions, we can also pass arguments into arrow functions. Below is an example.
 */
const multiply = (num) => num * 2;
multiply(6); // This will return the value 12;

/**
 * If an arrow function has only one parameter, we can omit the paranethes surrounding the parameter.
 * Example below.
 */
const multiply = num => num * 2;

/**
 * It is possible to pass more than one argument into an arrow function. Below is an example.
 */
const multiply = (a, b) => a * b;
multiply(4, 6); // This will return the value 24

// Here is another example of writing arrow functions that take two parameters
const connectTwo = (arr1, arr2) => arr1.concat(arr2);
// The function above will take two arrays and concatenate them
connectTwo(["Apples", "Oranges"], ["Pears", "Mangoes"]);
// This will return an array with ["Apples", "Oranges", "Pears", "Mangoes"];

/* -----------------------------------------------------------------------------------------------------------*/

/**
 * ES6 Also introduced default parameters for functions. This will allow functions to revert/use the
 * default value of a parameter when one is not directly specified. Example below.
 */

const helloName = (name = "Anonymous") => "Hello " + name;

console.log(helloName("Stephen")); // This will print to the console "Hello Stephen"
console.log(helloName()); // This will print to the console "Hello Anonymous"

// Below is a similar example using numbers
const addNums = (a, b = 1) => a + b;
/**
 * The function above will take two numbers and add them together, in the event that the second argument
 * is not specified, it will default to the number 1.
 */