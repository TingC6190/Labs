// Ting Chen
// May 16th 2015
// SDI 1505
// Lab6

// alert("JavaScript works!");

// GLOBAL VARIABLES


// FUNCTIONS
function finalName()
{
    var teamState = ["Orlando", "Los Angeles", "New York", "Chicago", "Miami"];
    var teamName = ["Magic", "Lakers", "Knicks", "Bulls", "Heats"];

    for (var i = 0; i < teamState.length; i++)
    {
        console.log("Team #" + (i+1) + ": " + teamState[i] + " " + teamName[i]);
    }
}

// MAIN CODE
finalName();