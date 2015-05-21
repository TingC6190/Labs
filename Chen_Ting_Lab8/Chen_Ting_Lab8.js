// alert("JavaScript works!");

// Ting Chen
// May 21st 2015
// SDI 1505
// Lab 8


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Problem 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*
// Global Variables
var emailString = "";

// Function
function checkEmail(emailArg)
{
    var checkAtSymbol;
    var checkPeriod;
    var checkSpace;

    emailString = prompt("Type in an email", "Bob123@gmail.com");

    checkAtSymbol = emailArg.indexOf("@");
    checkPeriod = emailArg.indexOf(".");
    checkSpace = emailArg.indexOf(" ");

    if (!(checkSpace))
    {
        if (checkAtSymbol && checkPeriod)
        {
            return [checkAtSymbol, checkPeriod, checkSpace];
        }
    }
}

// Main code
checkEmail(emailString);
console.log("Your email is " + emailString);
*/



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Problem 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Global Variables
var finalString;

// Function
function separatorFunction()
{
    var currentString;
    var newString;

    var string1 = prompt("What is your first string?", "abc");
    var string2 = prompt("What is your second string?", "def");
    var string3 = prompt("What is your third string?", "ghi");
    var separatorA = prompt("What would you like your separators to be?", ",");
    var separatorB = prompt("What would you like to replace your separators with?", "/");

    currentString = string1 + separatorA + string2 + separatorA + string3;
    newString = string1 + separatorB + string2 + separatorB + string3;

    console.log("Current: " + currentString);
    console.log("New: " + newString);
}


// Main code
separatorFunction(finalString);























