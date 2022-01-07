/**
 * For loops are declared with three optional expressions separated by semicolons
 * -> for (a; b; c), where a is the initialization statement, b is the condition statement, and 
 * c is the final expression.
 */

/**
 * The condition statement is evaluated at the beginning of every loop iteration and will 
 * continue as long as it evaluates to true. When the condition is false at the start of 
 * the iteration, the loop will stop executing. This means if the condition starts as false,
 * your loop will never execute.
 */

/** 
 * Create a for loop that will push the integer values 1 through 5 to an empty array
 */

// Empty array to store the integer values
let numArray = [];

/**
 * For loop to iterate the addition of integer values to our array
 */
for (let i = 1; i <= 5; i++)
{
    // Pushing the current index to the array
    numArray.push(i);
}

/**
 * Create a for loop that will push odd integer values 1 through 9 to an empty array
 */

// Empty array to store the integer values
let oddArray = [];

/**
 * For loop to iterate the addition of odd integer values to our array
 * Since we're starting at 1, increment by 2 to get to the next odd number
 */
for(let i = 1; i <= 9; i += 2)
{
    // Pushing the current index to the array
    oddArray.push(i);
}

/**
 * Create a for loop that will push odd integer values 9 through 1 to an empty array
 * Essentially, we would be adding numbers backwards or decrementing from greatest to least
 */

// Empty array to store the integer values
let oddBack = [];

/**
 * For loop to iterate the addition of odd integer values to our array
 * Since we're starting at 9, decrement by 2 to get to the next lower odd number
 */
for(let i = 9; i >= 1; i -= 2)
{
    // Pushing the current index to the array
    oddArray.push(i);
}