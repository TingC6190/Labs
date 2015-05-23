// Alert("JavaScript works!");
// Ting Chen
// SDI 1505
// Lab 9


// Global Variables
var finalNum;
var finalString;


// Problem 1
// Function
function formatNum(firstNum, decimalNum)
{
    // local variable
    var priorNum;

    //set number to specific number of decimals
    priorNum = firstNum.toFixed(decimalNum);

    return priorNum;
}




// Problem 2
// Function
function stringToNum(stringArg)
{
    // ask for a number string
    var stringArg = prompt("Enter a number string to be converted into a number:", "23")

    // if it's not a number, ask again
    while (isNaN(stringArg))
    {
        stringArg = prompt("Enter a valid number string: ", "23");
    }
    // print out number if it is a number string
    if (!(isNaN(stringArg)))
    {
        stringArg = parseFloat(stringArg);
    }

    return stringArg;
}

// Main code
finalNum = formatNum(3.141592654, 5);
console.log("Final number: " + finalNum);

finalString = stringToNum();
console.log ("This is your number string that is converted into a number: " + finalString);