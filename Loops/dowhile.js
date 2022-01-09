/**
 * A do...while loop ensures that the code inside the loop will run at least once. 
 * Let's try getting a do...while loop to work by pushing values to an array.
 */
// Empty array to push values into
let arr = [];
// Loop index tracker
let i = 0;

/**
 * Do...while loop that will push the current index into the array
 */
do 
{
    // Pushing index into array
    arr.push(i);
    // Incrementing index
    i++;
}
// While condition checker
while (i < 5);