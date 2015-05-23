// Alert("JavaScript works!");
// Ting Chen
// SDI 1505
// Lab 9


// Global Variables
var finalNum;


// Problem 1
// Functions
function formatNum(firstNum, decimalNum)
{
    // local variable
    var priorNum;

    //set number to specific number of decimals
    priorNum = firstNum.toFixed(decimalNum);

    return priorNum;
}

// Main code
finalNum = formatNum(3.141592654, 5);
console.log("Final number: " + finalNum);