// Ting Chen
// May 16th 2015
// SDI 1505
// Lab6

// alert("JavaScript works!");

// GLOBAL VARIABLES


// FUNCTIONS
// this function creates two arrays which are then concatenated to form a basketball team name
function finalName()
{
    // array for team state
    var teamState = ["Orlando", "Los Angeles", "New York", "Chicago", "Miami"];
    // array for team name
    var teamName = ["Magic", "Lakers", "Knicks", "Bulls", "Heats"];

    // loop that combines both arrays
    for (var i = 0; i < teamState.length; i++)
    {
        console.log("Team #" + (i+1) + ": " + teamState[i] + " " + teamName[i]);
    }

    // pushing in another teamState/teamName
    teamState.push("Cleveland");
    teamName.push("Cavaliers");

    console.log("\nThis is the result after pushing in another team.");
    // loop with the newly added team
    for (var i = 0; i < teamState.length; i++)
    {
        console.log("Team #" + (i+1) + ": " + teamState[i] + " " + teamName[i]);
    }

    // shifting out a team
    teamState.shift();
    teamName.shift();

    console.log("\nThis is the result after shifting out a team.")
    for (var i = 0; i < teamState.length; i++)
    {
        console.log("Team #" + (i+1) + ": " + teamState[i] + " " + teamName[i]);
    }

}

// MAIN CODE
finalName();