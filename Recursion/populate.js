/**
 * Much like how we can do with loops, we can also use recursion to populate 
 * arrays with data such as integer values.
 * 
 * Below is an example of an array being populated from 1 to a very large number 
 * using a paramater as the largest value being pushed into array
 */
function countup(num)
{
    // Base case check, if num is less than 1, return an empty arry
    if(num < 1)
    {
        return [];
    }
    else
    {
        // Recursive call
        const arr = countup(num - 1);
        // Populate our array from smallest value to num
        arr.push(num);
        // Return the array
        return arr;
    }
}

/**
 * Here is an example of populating an array with integer values of largest to smallest
 * To achieve this, we will populate the array using the .unshift() method to add elements
 * from the front of the Array, this will simulate adding items from a large number to a small one
 */
function countdown(num)
{
    // Base case check, if num is less than 1, return an empty arry
    if(num < 1)
    {
        return [];
    }
    else
    {
        // Recursive call
        const arr = countup(num - 1);
        // Populate our array from num to 1
        arr.unshift(num);
        // Return the array
        return arr;
    }
}

/**
 * Below is an example of populating an array with integers using recursion where the
 * array is populated with integers within a given range of numbers
 */
function popRange(start, end)
{
    // If the starting and ending numbers are equal
    if(start - end === 0)
    {
        // Return an array with just the starting number
        return [start];
    }
    // Otherwise
    else
    {
        // Recursive function call with end - 1
        const arr = popRange(start, end - 1);
        // Push the end into the array
        arr.push(end);
        // Return array once populated
        return arr;
    }
}