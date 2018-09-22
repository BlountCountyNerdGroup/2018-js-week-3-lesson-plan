var heroHealth = 100;
var heroPower = 10;

var enemyName = "Test";
var enemyHealth = 100;
var enemyPower = 10;

alert("You are fighting " + enemyName);
attack();

function attack() {
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

    // Tell them we want to let the player keep doing actions until either the player is dead or the enemy is defeated
    // try to get them to come up with how we should do that. This is one solution:
    if (heroHealth <= 0) {
        var playAgain = prompt("You lose! Try again? (y/n)");
        if (playAgain == "y") {
            alert("You are fighting " + enemyName);
            attack();
        }
    } else if (enemyHealth > 0) {
        attack();
    }  else {
        // game over
        alert("You win!");
    }
}

// if you reach this point with a good amount of time, perhaps you could add another type of attack called "Powerful attack"
// the attack would make you wait 2 moves before you can attack, but it does a lot of damage.
// I will implement this feature in part3.js. New lines are 13-14, 20-23, 27-39, 55-64