// fighting simulator

var heroHealth = 100;
var heroPower = 10;

var enemyName = "Test";
var enemyHealth = 100;
var enemyPower = 10;

alert("You are fighting " + enemyName);
var response1 = prompt("Would you like to:\n1. Attack\n2. Gather power");
if (response1 == "1") {
    enemyHealth -= heroPower;

    alert("Critical hit! The enemy only has " + enemyHealth + " health!");
    
    // let the enemy attack
    var enemyMisses = Math.random() * 10 > 5; // creates 50% chance. You can explain this with the whiteboard

    if (!enemyMisses) {
        heroHealth -= enemyPower;
        
        alert("You've been hit!!\n\nYou only have " + heroHealth + " health now!");
    }
} else if (response1 == "2") {
    alert("GAINING POWER!");

    heroPower += 10;
}

// at this point, you ask the students what they think the best way to let the player attack again
// then you tell them about functions. I will turn this into a function in part2.js (new lines start at line 32 of part2.js)