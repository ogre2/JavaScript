/**
 * Exploring the differences in variable scopes declared by the var and let keywords
 * 
 * When you declare a variable using the var keyword, it is declared globally, or locally
 * if declared within a function block.
 * 
 * The let keyword behaves very similarly, however, when you declare a variable using let
 * inside a block, statement, or expression, its scope is limited to that block, statement,
 * or expression.
 */

// For example
var arr = [];
for(var i = 0; i < 3; i++)
{
    arr.push(i);
}
console.log(arr);
console.log(i);

/**
 * Here, the console will display [0, 1, 2] and 3. With the var keyword, i is declared globally.
 * So when i++ is executed in the for loop, it udpates the global variable.
 * 
 * The above code is similar to this below:
 */
var nums = [];
var i;
for(i = 0; i < 3; i++)
{
    nums.push(i);
}
console.log(nums);
console.log(i);
// The above console log calls will print [0, 1, 2] and 3;

/**
 * This behavior may cause problems when you were to create a function and store it for later use
 * inside a for loop that uses the i variable. This is because the stored function will always
 * refer to the value of the updated global i variable.
 */
var printTwo;
for(var i = 0; i < 3; i++)
{
    if(i===2)
    {
        printTwo = function()
        {
            return i;
        }
    }
}
console.log(printTwo());
// The above console log call will print 3

/**
 * The printTwo() function will print 3 and not 2, but why? Its because the value assigned to i was
 * updated and the printTwo() returns the global i and not the value i had when the function was created
 * inside the for loop.
 * 
 * The let keyword does not follow this behavior
 */
let printTwo;
for(let i = 0; i < 3; i++)
{
    if(i===2)
    {
        printTwo = function()
        {
            return i;
        }
    }
}
console.log(printTwo());
console.log(i);
// Here the console log will display the value 2, and an error that "i is not defined".

/**
 * i Is not defined because it was not declared in the global scope, it's only declared within the
 * the for loop statement. printTwo() returned the correct value because three different i variables with
 * unique values (0, 1, and 2) were created by the let keyword within the loop statement
 */

/**
 * Below is a conversion of a function that explores variable scopes, the first function is written
 * using the var keyword, whilst the second is written using the let keyword.
 */
function checkScope()
{
    var i = 'function scope';

    if(true)
    {
        i = 'block scope';
        console.log('Block scope i is: ', i);
    }

    console.log('Function scope i is: ', i);

    return i;
}

/**
 * In the above function inside the if statement, the function will console log 'Block scope i is: block scope',
 * it will also print that i is a block scope for the console log call outside of the if statement as well.
 * 
 * Thats because the i variable is declared using the var keyword, which in turn makes the recent change to i
 * inside the if statement as valid for both console log calls.
 * 
 * Below is the same function declared using the let keyword
 */
function checkScope()
{
    let i = 'function scope';

    if(true)
    {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }

    console.log('Function scope i is: ', i);

    return i;
}

/**
 * Now the function will correctly print the wright scope for each console log call
 */