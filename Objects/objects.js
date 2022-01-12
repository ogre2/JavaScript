const myUser = 
{
    "name": "Steve",
    "age": 24,
    "hobbies": ["Coding", "Math", "Gaming"]
}

function checkProp(obj, prop)
{
    if(obj.hasOwnProperty(prop))
    {
        return obj.prop;
    }
    else
    {
        return "Not Found";
    }
}

console.log(checkProp(myUser, "friends"));