// window.alert("this is an alret! javaScript is running"); 

var playerName = window.prompt("What is your robot's name? ");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);


var enemyName = "Robert"
var enemyHealth = 50;
var enemyAttack = 12;

var playerMoney = 10;


console.log(enemyName, enemyHealth, enemyAttack);

// this creates a function named "fight"
function fight(params) {
    //alret player that they are starting the round 
    window.alert("The fight has begun");


    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");
    //subtract the value of "Playerattack" from the value of "enemyHealh" and use that result to update the value in the enemyHealth variable 


    if (promptFight == "fight" || promptFight == "FIGHT") {

        enemyHealth = enemyHealth - playerAttack;

        //log a reasulting message to the console so we know that it worked 
        console.log(playerName + " attacked " + enemyName + "." + enemyName + " Now has " + enemyHealth + " Health remaining");


        if (enemyHealth <= 0) {
            window.alert(enemyName + "has died");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left");
        }

        //subtract the value of enemyAttack from the value of player and use that result to update the value in the playerHealth variable 
        playerAttack = playerHealth - enemyAttack;


        //log a result message to the console so we know that it worked. 
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        if (playerHealth <= 0) {
            window.alert(playerName + "has died");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + "health left");
        }
    }
    else if (promptFight == "skip" || "SKIP") {
        //confirm players want to skip 
        var confrimSkip = window.confirm("Are you sure you'd like to quit");

        if (confrimSkip) {
            window.alert(playerName + " has decided to skip this fight. GOOD BYE");
            playerMoney = playerMoney - 2;
        }
        else {
            fight(); 
        }
    }
    else {
        window.alert("you need to choose a valid option. try again");
    }
}

// create function
// var fight = function() {
//   window.alert("Welcome to Robot Gladiators!");
// };
// execute function
// fight();


fight();










//window.alert(playerName);


//another way for debugging
//console.log(playerName);



// This is a String data type; it must be wrapped in double quotes (" ") or single quotes (' ').
//var stringDataType = "This is a string, which is a fancy way to say text";

// This is a Number data type; it can be an integer (whole number) or have decimals (floated numbers).
//var numberIntegerDataType = 10;
// var numberFloatDataType = 10.4;

// This is a Boolean data type, which can only be given a value of true or false.
// var booleanDataType = true;