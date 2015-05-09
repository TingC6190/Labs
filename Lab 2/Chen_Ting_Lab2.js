alert("JavaScript works!");

/*
Ting Chen
SDI 1505
Lab2
 */

// These are my variables
var leaveTime = 15;
var driveTime = 10;
var arriveTime = (leaveTime - driveTime);
var workPlace = "Chuck E Cheese";
var bdayParty
var workingGames
var gamesNotWorking

// my outputs
console.log("I work at " + workPlace + ".");
console.log("I need to leave " + leaveTime + " minutes before work.");
console.log("It takes me " + driveTime + " minutes to drive to work.");
console.log("This gives me " + arriveTime + " minutes to say \"hi\" to my coworkers.");

// Ask the user if there are any birthday parties
bdayParty = confirm("Are there any birthday parties?");

if (bdayParty == 1)
{
    console.log(bdayParty + ": There are birthday parties, therefore put the ChuckE suit on");
}
else
{
    console.log(bdayParty + ": There are no birthday parties.");
}

// ask the user if there are any broken games
workingGames = confirm("Are there any broken games?");

if (workingGames == 1)
{
    // how many broken games?
    gamesNotWorking = prompt("How many games are broken?");

    console.log(workingGames + ": There are " + gamesNotWorking + " broken games to be fixed");
}
else
{
    console.log("There are no broken games, therefore I will help the cashier and bring food to the tables");
}


