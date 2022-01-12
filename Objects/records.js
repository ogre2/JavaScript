/**
 * Object that contains the items we will use the update records
 * function to test on
 */
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

/**
 * This function will take an object literal along with some properties
 * and will update specific items of the object depending on the status of
 * the provided properties
 * @param {*} records 
 * @param {*} id 
 * @param {*} prop 
 * @param {*} value 
 * @returns 
 */
function updateRecords(records, id, prop, value)
{
    // If prop isn't tracks and value is not empty
    if(prop !== "tracks" && value !== "")
    {
        // Set the property to value
        records[id][prop] = value;
    }
    // If property is tracks but the object does not have the tracks property
    else if(prop === "tracks" && records[id].hasOwnProperty("tracks") === false)
    {
        // Create the property and assign an array that contains value
        records[id][prop] = [value];
    }
    // If property is tracks and value is not an empty string
    else if(prop === "tracks" && value !== "")
    {
        // Push value to the tracks property array
        records[id][prop].push(value);
    }
    // If value is an empty string
    else if(value === "")
    {
        // Delete the property
        delete records[id][prop];
    }

    // Return the records object
    return records;
}