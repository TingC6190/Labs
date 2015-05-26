// alert("JavaScript works!");

// Ting Chen
// SDI 1505
// Lab 10

// Global Variables
var returnedNum;
var pOrF = prompt("Would you like a Florida ticket or Powerball ticket? \nType 1 for Florida or 2 for Powerball");


// Function
function quickPick(argTicket)
{
    var arrayTicket = [6];
    var randFlorida = Math.random() * (59 - 1) + 1;
    var push;
    var pop;

    // Florida ticket code
    if (pOrF == 1)
    {
        
    }
    // Powerball ticket code
    else if (pOrF == 2)
    {

    }

    return arrayTicket;
}


// Main code
returnedNum = quickPick(pOrF);