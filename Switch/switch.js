/**
 * Function to run through switch statement cases
 * @param {*} val 
 */
function switchCase(val)
{
    // Variable to manipulate during switch cases
    let answer = "";

    /**
     * Switch statement manipulates paramater
     */
    switch(val)
    {
        case 'a':
            answer = "Alpha";
            break;
        case 'b':
            answer = "Beta";
            break;
        case 'c':
            answer = "Gamma";
            break;
        case 'd':
            answer = "Delta";
            break;
        default:
            answer = "Zeta";
            break
    }
}