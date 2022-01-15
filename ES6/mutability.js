/**
 * The const declaration has many uses in JavaScript, it is important to understand that
 * objects (including arrays and functions) assigned to a variable declared by the const
 * keyword are still mutable. Using const only prevents the reassigning of the variable
 * identifier.
 * 
 * Here is an example below:
 */
const arr = [4, 3, 6];

arr = [1, 2, 3];

arr[1] = 22;

console.log(s);

/**
 * arr = [1, 2, 3] will result in an error. The console log will print out [4, 22, 6];
 * 
 * As you can see, you can mutate the object [4, 3, 6] itself and the variable will in turn
 * point to the mutated version of the array [4, 22, 6]. Like all arrays, the elements in arr
 * are still mutable, but because const was used, we cannot use the variable identifier arr
 * to point to a different array using the assignment operator.
 */

/**
 * Below is how we would mutate an array declared by the const keyword
 */

const nums = [1, 2, 3];

function updateArr()
{
    // Inline
    nums[0] = 3, nums[1] = 18, nums[2] = 22;
}

updateArr();

/**
 * We can still target individual items inside the array and change their values as
 * demonstrated in the function above.
 */

/**
 * You can also prevent the mutation of objects using the JavaScript Object.freeze()
 * function to prevent data mutation.
 * 
 * Any attempt at changing the object will be denied with an error thrown if the script
 * is running in strict mode.
 * 
 * Here's an example below:
 */
const dude = {
    "firstName": "Tom",
    "lastName": "Chandler",
    "age": 44,
    "hobbies": ["Hiking", "Reading", "Barbecuing"]
};

Object.freeze(dude);

dude.firstName = "Lance";
dude.friends = ["Tom Chandler", "Mike Slater"];

console.log(dude);

/**
 * The dude.firstName and dude.friends assignment will result in errors
 * 'error: Uncaught TypeError: Cannot assign to read only property 'fName' of object '#<Object>'
 * The Object.freeze() function changes an object/variable into read only.
 * 
 * When we console log dude, we will see { firstName: "Tom", lastName: "Chandler", age: 44... }
 */