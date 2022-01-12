/**
 * JavaScript has the parseInt() function which parses a string and returns
 * an integer. Here's an example below
 */
let a = parseInt("065");

/**
 * The above variable will be saved as the number 65. If the first character
 * in the string cannot be converted into a number, JavaScript will return NaN.
 *
 * Here's an example of using parseInt() within a function that will parse a string
 * parameter into an integer
 */
function convert(str)
{
    // Calling and returning the result of parseInt with our string parameter
    return parseInt(str);
}

/**
 * The parseInt() function parses a string and returns an integer. It takes a second argument 
 * for the radix, which specifies the base of the number in the string. The radix can be an 
 * integer between 2 and 36.
 * 
 * Below i show it would look.
 */
parseInt(string, radix);

// Here's an example
let b = parseInt("25", 2);

/**
 * The radix variable says that 11 is in the binary system, 
 * or base 2. This example converts the string 11 to an integer 3.
 * 
 * Here's an example in a function format of converting a binary string number into
 * an integer and retuning it.
 */
function convert2(str)
{
    // This will return the converted binary integer number
    return parseInt(str, 2);
}