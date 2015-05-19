//alert("JavaScript works!");

// Ting Chen
// May 19th 2015
// SDI 1505
// Lab 7

// global variables
var arrayOne = [10, 6, 7, 3, 12, 5];
var arrayTwo = [25, 100, 4, 22, 16, 105, 2, 7];
var arrayThree = [2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42];
var finalArray = [];

//function

function sortedArray(argArray)
{
    // local variables
    var newArray = [];
    var leftNum;
    var rightNum;

    // loop through the array according to the length of the array
    for(var j = 0; j < argArray.length; j++)
    {
        // loop through two numbers, left and right
        for (var i = 0; i < argArray.length; i++)
        {
            // set the left number to be the 1st number
            leftNum = argArray[i];
            // set the right number to be the 2nd number
            rightNum = argArray[(i) + 1];

            // if left number is bigger than right number, then exchange their position
            if (leftNum > rightNum) {
                argArray[i] = rightNum;
                argArray[(i) + 1] = leftNum;
            }
        }
    }
    console.log(argArray);
    return newArray;

}

//main code

// print out sorted array 1
console.log("Sorted Array 1: " + finalArray);
finalArray = sortedArray(arrayOne);

// print out sorted array 2
console.log("\nSorted Array 2: " + finalArray);
finalArray = sortedArray(arrayTwo);

// print out sorted array 3
console.log("\nSorted Array 3: " + finalArray);
finalArray = sortedArray(arrayThree);