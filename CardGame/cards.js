// Count variable
let count = 0;

/**
 * Function to manage the card game
 * @param {*} card 
 * @returns 
 */
function cc(card)
{
    // Switch statement 
    switch(card)
    {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'K':
        case 'Q':
        case 'A':
            count--;
            break;
    }

    let bet = 'Hold';

    if (count > 0)
    {
        bet = "Bet";
    }

    return count + " " + bet;
}