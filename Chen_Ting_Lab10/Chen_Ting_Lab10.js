// alert("JavaScript works!");

// Ting Chen
// SDI 1505
// Lab 10

// Global Variables
var returnedNum;
var powerball;
var pOrF = prompt("Would you like a Florida ticket or a Powerball ticket? \nType Florida or Powerball", "Florida or Powerball");

// Function
function quickPick(argTicket)
{
    var arrayTicket = [];
    var hold;

    // Florida ticket code
    if (pOrF == "Florida")
    {
        // loop through 6 times to get each random number
        for (var i = 0; i < 6; i++)
        {
            arrayTicket.push(Math.floor(Math.random() * (53 - 1) + 1));
        }
        return arrayTicket;
    }

    // Powerball ticket code
    else if (pOrF == "Powerball")
    {
        // loop through 5 times to get each random number
        for (var i = 0; i < 5; i++)
        {
            arrayTicket.push(Math.floor(Math.random() * (59 - 1) + 1));
        }
        return arrayTicket;
    }
}

// Main code
returnedNum = quickPick(pOrF);
console.log("The " + pOrF + " ticket numbers are: " + returnedNum);

if (pOrF == "Powerball")
{
    // random number for powerball
    powerball = Math.floor(Math.random() * (35 - 1) + 1);
    console.log("Your Powerball is " + powerball);
}