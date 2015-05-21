// alert("JavaScript works!");

// Ting Chen
// May 21st 2015
// SDI 1505
// Lab 8



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