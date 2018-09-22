var heroHealth = 100;
var heroPower = 10;

var enemyName = "Test";
var enemyHealth = 100;
var enemyPower = 10;

alert("You are fighting " + enemyName);
attack();

function attack() {

    // added option 3
    var response1 = prompt("Would you like to:\n1. Attack\n2. Gather power\n3. Powerful Attack");
    if (response1 == "1") {
        enemyHealth -= heroPower;

        alert("Critical hit! The enemy only has " + enemyHealth + " health!");
        
        // in part3, we move the enemy attack to a new function. 
        // Now we can let the enemy attack an arbitrary number of times
        enemyAttack();
    } else if (response1 == "2") {
        alert("GAINING POWER!");

        heroPower += 10;
    } else if (response1 == "3") {

        // the enemy attacks twice while we're gathering power, and we get to do a powerful attack
        // honestly what would be fun here is to add some randomness so that you don't know how many times the enemy
        // can attack before you're able to attack. It's up to you. Here is my basic implementation that you can change.
        enemyAttack();
        enemyAttack();

        // multiply player attack by 3 times normal power
        enemyHealth -= heroPower * 3;

        alert("You do a powerful attack!! Massive damage!!! The enemy has " + enemyHealth + " health now!");
    }

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

function enemyAttack() {
    // let the enemy attack
    var enemyMisses = Math.random() * 10 > 5; // creates 50% chance. You can explain this with the whiteboard

    if (!enemyMisses) {
        heroHealth -= enemyPower;

        alert("You've been hit!!\n\nYou only have " + heroHealth + " health now!");
    }
}

// any other additions or changes are up to you. See the comment on lines 29-30 for my suggested improvement that you could make