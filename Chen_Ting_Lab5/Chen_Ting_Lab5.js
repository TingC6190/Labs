// alert("JavaScript works!");

// Ting Chen
// May 14th 2015
// Lab 5

// Global variable
var num1;
var num2;
var finalNum;
var calcSymbol;

// Addition function
function calcAdd()
{
    num1 = parseFloat(prompt("Enter the first number: "));
    num2 = parseFloat(prompt("Enter the second number: "));
    finalNum = (num1 + num2);
    return finalNum;
}

function calcSub()
{
    num1 = parseFloat(prompt("Enter the first number: "));
    num2 = parseFloat(prompt("Enter the second number: "));
    finalNum = (num1 - num2);
    return finalNum;
}

function calcMult()
{
    num1 = parseFloat(prompt("Enter the first number: "));
    num2 = parseFloat(prompt("Enter the second number: "));
    finalNum = (num1 * num2);
    return finalNum;
}

// main
calcSymbol = parseFloat(prompt("Would you like to add, subtract, multiply, or divide?"
    + "\nEnter 1 for \"Addition\""
    + "\nEnter 2 for \"Subtraction\""
    + "\nEnter 3 for \"Multiplication\""
    + "\nEnter 4 for \"Division\""));

if(calcSymbol == 1)
{
    calcAdd();
    console.log(num1 + " + " + num2 + " = " + finalNum);
}
else if (calcSymbol == 2)
{
    calcSub();
    console.log(num1 + " - " + num2 + " = " + finalNum);
}
else if (calcSymbol == 3)
{
    calcMult();
    console.log(num1 + " * " + num2 + " = " + finalNum);
}