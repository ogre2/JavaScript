/**
 * Arrays are certain type of data structure that stores ordered collections
 * Collections can be of any data that JS supports (BASONN)
 */

/**
 * Ways to declare an array
 */
// First method
let arr = new Array();
// Second method
let arr2 = [];

/** 
 * Almost all the time the second method is used, and we can supply initial elements 
 * in the square brackets
*/
let groceries = ["Bread", "Milk", "Eggs", "Cereal"];

/**
 * Array elements are always numbered, and are zero indexed, meaning they are counted
 * starting at 0 and onwards. The first element is at index 0, then each subsequent index
 * increases by 1
 */
let fruits = ["Oranges", "Bananas", "Apples"];

console.log(fruits[0]); // Will print out the first item in fruits *Oranges*
console.log(fruits[1]); // Will print out the second item in fruits *Bananas*
console.log(fruits[2]); // Will print out the third item in fruits *Apples*

/**
 * Elements in arrays can be replaced or added using bracket notation
 */
let cars = ["Chevrolet", "Cadillac", "Ford"];

// To replace Cadillac with GMC, we can do
cars[1] = "GMC";

// If we were to print the cars array, we would see -> Chevrolet, GMC, Ford
// console.log(cars);

// To add an element to the array, we can target an index one above the current total
cars[3] = "Lincoln";
// If we were to print the cars array, we would see -> Chevrolet, GMC, Ford, Lincoln
// console.log(cars);

/**
 * The total count of the elements in the array is its length:
 */
let movies = ["iRobot", "Avengers", "Cars 2"];
console.log(movies.length) // This will console log 3

/**
 * As stated before, arrays can store many types of elements
 */
let trailmix = ["String", 3, { name: "Steve" }, false, function() { console.log("Coding is awesome!") }];

// We can even target certain items in the array and access their properties
// For example, we can access the name property stored in the object
console.log(trailmix[2].name); // This will console log "Steve"

// We can run functions stored in the array as well
trailmix[4](); // This will run the function and console log "Coding is awesome!"

//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Common array methods
 * Push, Shift, Unshift, Pop
 */

// The push method appends an element to the end of an array
let numArr = [1, 2, 3, 4];
numArr.push(5) // This will add the number 5 to the num array

// The pop method removes an element from the end of an array and returns it
numArr.pop() // Will remove the last element (5) from the array

// The shift method removes an element from the front of an array and returns it
numArr.shift() // Will remove the first element (1) from the array

// The unshift method will add an element to the front of an array
numArr.unshift(0); // Will add the number 0 to the front of the num array