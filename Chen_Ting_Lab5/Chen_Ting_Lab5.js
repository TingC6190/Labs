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
    // ask for 2 numbers
    num1 = parseFloat(prompt("Enter the first number: "));
    num2 = parseFloat(prompt("Enter the second number: "));
    finalNum = (num1 + num2);
    return finalNum;
}

// Subtraction function
function calcSub()
{
    // ask for 2 numbers
    num1 = parseFloat(prompt("Enter the first number: "));
    num2 = parseFloat(prompt("Enter the second number: "));
    finalNum = (num1 - num2);
    return finalNum;
}

// Multiplication function
function calcMult()
{
    // ask for 2 numbers
    num1 = parseFloat(prompt("Enter the first number: "));
    num2 = parseFloat(prompt("Enter the second number: "));
    finalNum = (num1 * num2);
    return finalNum;
}

// Division function
function calcDiv()
{
    // ask for 2 numbers
    num1 = parseFloat(prompt("Enter the first number: "));
    num2 = parseFloat(prompt("Enter the second number: "));
    while ( num2 === 0)
    {
        // if the 2nd number they entered is 0, ask them again for a different number
        num2 = parseFloat(prompt("Enter a different second number: "));
    }
    finalNum = (num1 / num2);
    return finalNum;
}

// main code
// ask the user what they want to do
calcSymbol = parseFloat(prompt("Would you like to add, subtract, multiply, or divide?"
    + "\nEnter 1 for \"Addition\""
    + "\nEnter 2 for \"Subtraction\""
    + "\nEnter 3 for \"Multiplication\""
    + "\nEnter 4 for \"Division\""));

// print out the addition problem
if(calcSymbol == 1)
{
    calcAdd();
    console.log(num1 + " + " + num2 + " = " + finalNum);
}

// print out the subtraction problem
else if (calcSymbol == 2)
{
    calcSub();
    console.log(num1 + " - " + num2 + " = " + finalNum);
}

// print out the multiplication problem
else if (calcSymbol == 3)
{
    calcMult();
    console.log(num1 + " * " + num2 + " = " + finalNum);
}

// print out the division problem
else if (calcSymbol == 4)
{
    calcDiv();
    console.log(num1 + " / " + num2 + " = " + finalNum);
}
