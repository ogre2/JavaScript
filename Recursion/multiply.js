/**
 * Here is a recursive function that multiplies the first n elements of an 
 * array to create the product of those elements.
 */
 function multiply(arr, n)
 {
     // Base case
     if(n <= 0)
     {
         return 1;
     }
     // Recursive call of function
     return multiply(arr, n - 1) * arr[n - 1];
 
     /**
      *  In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, 
      * but with n - 1. That function call is evaluated in the same way, calling multiply again 
      * until n <= 0. At this point, all the functions can return and the original 
      * multiply returns the answer.
      */
 }

 /**
 * Factorial recursion
 */
function fact(num)
{
    // Base case
    if(num <= 1)
    {
        return 1;
    }

    // Recursive call
    return n * fact(n - 1);
}