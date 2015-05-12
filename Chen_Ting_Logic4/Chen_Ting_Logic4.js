//  NAME:  Ting Chen
//  DATE:  May 12th 2015
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

//var p;
//var q;
//var r;
//
//p = confirm("First value:  Click OK for true or Cancel for false.");
//q = confirm("Second value:  Click OK for true or Cancel for false.");
//r = confirm("Third value:  Click OK for true or Cancel for false.");
//
////if (p && q) {
////    console.log("With " + p + " and " + q + ", the outcome is TRUE.");
////} else {
////    console.log("With " + p + " and " + q + ", the outcome is FALSE.");
////}
//
////if (p || q) {
////    console.log("With " + p + " and " + q + ", the outcome is TRUE.");
////} else {
////    console.log("With " + p + " and " + q + ", the outcome is FALSE.");
////}
//
//if (p &&(q || r)) {
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is TRUE.");
//} else {
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is FALSE.");
//}







//// Problem 1
//// variables
//var ticketPrice = 12;
//var age;
//
//// ask how old they are
//age = prompt("How old are you?");
//
//if (age >= 55 || age <= 10)
//// print this if they are 55 and older, or 10 and younger
//{
//    console.log("Your price for one ticket will be $" + (parseInt(ticketPrice) - 7) + ".00");
//}
//else
//// print this if they are between 11 to 54
//{
//    console.log("Your price for one ticket will be $" + parseInt(ticketPrice) + ".00");
//}




// Problem 2
// variables
var frontLeft;
var frontRight;
var rearLeft;
var rearRight;

// Ask for the tire pressures of each tire
frontLeft  = prompt("What is the tire pressure of the \"Front Left\" tire?");
frontRight = prompt("What is the tire pressure of the \"Front Right\" tire?");
rearLeft   = prompt("What is the tire pressure of the \"Rear Left\" tire?");
rearRight  = prompt("What is the tire pressure of the \"Rear Left\" tire?");

// check to see if the front left tire equals the front left,
// then check to see if the rear left tire equals the rear right
if ((frontLeft === frontRight) && (rearLeft === rearRight))
{
    console.log("Your tire pressures are up to spec.");
}
else
{
    console.log("Something went wrong and your car blew up. QQ");
}


















