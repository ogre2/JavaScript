/**
 * JavaScript has a Math.random() function which can generate a random decimal number
 * between 0 (inclusive) and 1 (exclusive). This means that the function can
 * return 0 but never 1.
 */
function generateRandom()
{
    // Returning a random generated number using Math.random()
    return Math.random();
}

/**
 * Math.random() can also be used to generate whole numbers when used in conjuction
 * with Math.floor() which is a JavaScript function that rounds decimal numbers to whole
 * numbers.
 * 
 * We use Math.random() to generate the random number, then multiply it by any whole
 * integer we like, then wrap all of that within Math.floor() to generate a random whole
 * number between 0 and that whole integer we used.
 */

/**
 * Here's an example of Math.random() and Math.floor() used to generate a random number
 * between 0 and 20.
 */
function randomWhole()
{
    // This will return a random whole number between 0 and 20
    return Math.floor(Math.random() * 20);
}

/**
 * We can also use Math.random() and Math.floor() to generate a whole number that is between
 * our own predetermined minimum and maximum instead of just between 0 and chosen maximum value.
 * To do this, we can follow this formula
 * 
 * Math.floor(Math.random() * (max - min + 1)) + min
 * 
 * Below is the formula at work
 */

// Declaring and assigning our minimum and maximum values
let min = 10, max = 50;

// Random range generating function
function randomRange(min, max)
{
    // This will return a random whole number between 10 and 50
    return Math.floor(Math.random() * (max - min + 1)) + min;
}