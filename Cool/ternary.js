/**
 * The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
 * The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, 
 * and c is the code to run when the condition returns false.
 */

// Below is a function that uses the traditional if-else statement check for a condition
function ifElse(a, b)
{
    if(a > b)
    {
        return "a is greater";
    }
    else {
        return "b is greater";
    }
}

// The above can be rewritten using the ternary operator as such
function ternary(a, b)
{
    // Using ternary operator to check our statements and conditions
    return a > b ? "a is greater" : "b is greater";
}

// Here is a function that uses the ternary operator to check for equality
function isEqual(a, b)
{
    return a === b ? "Equal" : "Not Equal";
}

/**
 * The ternary operator is seldom used as the formatting does appear a little tricky/confusing
 * especially when written code is shared among multiple developers who may or may not be
 * familiar with this statement check for conditions.
 */

/**
 * Ternary operators can also be chained together to evaluate multiple statements/conditions
 * much like how if-else statements can be chained.
 * 
 * Below is an example in a function that checks whether a number is positive, negative,
 * or equal to zero
 */

function checkSign(num)
{
    // First ternary operator checks to see if the number is positive
    return (num > 0) ? "Positive"
        // Then the chained ternary checks if it's negative or zero
        : (num < 0) ? "Negaitve"
        : "Zero";
}

/**
 * It is considered best practice to format multiple conditional operators such that 
 * each condition is on a separate line, as shown above. Using multiple conditional operators 
 * without proper indentation may make your code hard to read.
 * 
 * Here is an example below
 */
function checkSign2(num)
{
    return (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
}