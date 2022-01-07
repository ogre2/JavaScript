/**
 * Create a while loop that will push integer values to an
 * array in decrementing order starting at 5.
 */

// Empty array to store the integer values
let numArray = [];
// Our index counter 
let i = 5;

/**
 * While loop to control the adding of our integers to the array
 */
while (i >= 0)
{
    // Push the current index to the array
    numArray.push(i);
    // Decrement the index counter by 1
    i--;
}

/**
 * While loops are great when you need to iterate something for an 
 * unknown number of times, as long as there is a stopping point
 */