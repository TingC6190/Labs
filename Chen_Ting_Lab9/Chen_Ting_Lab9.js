// Alert("JavaScript works!");
// Ting Chen
// SDI 1505
// Lab 9


// Global Variables
var finalNum;
var finalString;
var finalDate;


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



// Problem 3
// Function
function diffInDate(dateOne, dateTwo, hourOrDay)
{
    // local variables
    var newDateDiff;
    var dayOrHour;
    var dayDiff;
    var hourDiff;
    var firstDate  = dateOne;
    var secondDate = dateTwo;

    // ask for two dates
    dateOne = new Date(prompt("Enter a date in this format: mm/dd/yyyy", "06/01/1990"));
    dateTwo = new Date(prompt("Enter a second date to find the difference between the two: mm/dd/yyyy", "08/06/1990"));

    var difference = dateOne - dateTwo;

    // ask if they want to convert to days or hours
    dayOrHour = prompt("Would you like to see the difference in \"Days\" or \"Hours\"", "Type 1 for Day or 2 for Hour");

    return newDateDiff;
}





// Main code
finalNum = formatNum(3.141592654, 5);
console.log("Final number: " + finalNum);

finalString = stringToNum();
console.log ("This is your number string that is converted into a number: " + finalString);

finalDate = diffInDate();
console.log("Difference in dates: " + finalDate);