// alert("JavaScript works!");

// Ting Chen
// SDI 1505
// Lab 10

// Global Variables
var returnedNum;
var pOrF = prompt("Would you like a Florida ticket or a Powerball ticket? \nType Florida or Powerball", "Powerball");

// Function
function quickPick(argTicket)
{
    var arrayTicket = [];
    // var randFlorida = Math.floor(Math.random() * (59 - 1) + 1);
    var hold;

    // Florida ticket code
    if (pOrF == "Florida")
    {
        for (var i = 0; i < 6; i++)
        {
            arrayTicket.push(Math.floor(Math.random() * (53 - 1) + 1));
        }
        return arrayTicket;
    }

    // Powerball ticket code
    else if (pOrF == "Powerball")
    {
        for (var i = 0; i < 5; i++)
        {
            arrayTicket.push(Math.floor(Math.random() * (59 - 1) + 1));
        }
        return arrayTicket;
    }
    return arrayTicket;
}


// Main code
returnedNum = quickPick(pOrF);
console.log("Your " + pOrF + " ticket numbers are: " + returnedNum);