/**
 * Recursion is the concept that a function can be expressed in terms of itself.
 * It can be used in place of loops to perform a function/task over and over again until 
 * a base case/terminating condition is met by calling itself over and over.
 */

/**
 * Example of recursive function with addition that returns the sum of the 
 * first n elements of an array. It is very similar in setup as the multiplication function above
 */
function sum(arr, n)
{
    // Base case
    if(n <= 0)
    {
        return 0;
    }

    // Recursive call
    return sum(arr, n - 1) + arr[n - 1];
}