// alert("JavaScript works!");

/*
Ting Chen
SDI 1505
Lab 3
 */

// variables
var yourName
var wakeUpTime = 9;
var workTime = 10;
var timeBetweenWork
var wakeUpOrNot
var whatToDo
var restroomOptions
var foodOptions
var numBanana
var numApple

timeBetweenWork = workTime - wakeUpTime;

// ask user for name
yourName = prompt("What is your full name?");

// outputs
console.log("Your name is " + yourName + ".");
console.log("The alarm goes off at " + wakeUpTime + "AM because you have work at " + workTime + "AM.");
console.log("This gives you " + timeBetweenWork + " hour to get ready.");

// ask user if they would like to wake up or not yet
wakeUpOrNot = confirm("Do you want to wake up now? \n Press \"OK\" to wake up or \"Cancel\" to sleep more.");

if (wakeUpOrNot == 1)
{
    console.log("You turn off the annoying alarm and get up off the bed.")

// decide between using the rest or eating breakfast
    whatToDo = prompt("Would you like to use the restroom or eat breakfast? \nType \"restroom\" or \"food\".");

    if (whatToDo === "restroom")
    {
        console.log("You walk to the restroom like a zombie.");

// decided between taking a shwoer or brushing your teeth
        restroomOptions = prompt("Would you like to take a shower or brush your teeth? \nType \"shower\" or \"teeth\".");

        if (restroomOptions === "shower")
        {
            console.log("You decide to take a nice relaxing shower.");
        }
        else if (restroomOptions === "teeth")
        {
            console.log("You decide to brush your teeth.");
        }
        else
        {
            console.log("You took too long to decide on an option. \nYou have to leave for work now or you are going to be late.");
        }
    }

    else
    {
        console.log("You walk to the kitchen like a zombie.");

// decide between banana or apple
        foodOptions = prompt("Would you like to have a bowl of cereal or eat an apple? \nType \"banana\" or \"apple\"");

        if (foodOptions === "banana")
        {
            // decide how many bananas you want to eat
            numBanana = prompt("How many bananas would you like to eat? \nType an amount from 1 to 5");
            if (numBanana >= 1 && numBanana <= 5)
            {
                console.log("You decide to eat " + numBanana + " bananas.");
            }
        }
        else if (foodOptions === "apple")
        {
            // decide how many apples you want to eat
            numApple = prompt("How many apples would you like to eat? \nType an amount from 1 to 3");
            if (numApple >= 1 && numApple <= 3)
            {
                console.log("You decide to eat " + numApple + " apples.");
            }
        }
        else
        {
            console.log("You took too long to decide on an option. \nYou have to leave for work now or you are going to be late.");
        }
    }

    console.log("You walk out the door and drive to work.");
}
// this is what happens when you don't wake up to the alarm
else
{
    console.log("You put the alarm in snooze and sleep through it on accident. Now you are late to work.");
}

