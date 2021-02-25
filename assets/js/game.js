//Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE"
//  * Player robot's health is zero or less


var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack= 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {

    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
    // Alert players that they are starting the round
  //  window.alert("Welcome to Robot Gladiators!");

    // prompt user to FIGHT or SKIP this round
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
            // skip or SKIP prompt confirmation  
            if (promptFight === 'skip' || promptFight === 'SKIP') {
                // confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                
                    // if yes (true), leave fight
                    if (confirmSkip) {
                        window.alert(playerName + " has decided to skip this fight. Goodbye!");
                        //subtract money from playerMoney for skipping
                        playerMoney = playerMoney - 10;
                        console.log("playerMoney", playerMoney);
                        break;
                    }

                    // if no (false), ask question again by running fight() again
                    else {
                        fight();
                    }
                // remove enemy's health by subtracting the amount set in the player variable
                enemyHealth = enemyHealth - playerAttack;
                // Log a resulting message to the console so we know that it worked.
                console.log(
                    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                );

                // check enemy's health
                if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
                    // if the enemy-robot's health is zero or less, exit from the fight loop.
                    break;
                    }
                else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }

                // remove player's health by subtracting the amount set in the enemyAttack variable
                playerHealth = playerHealth - enemyAttack;
                // Log a resulting message to the console so we know that it worked.
                console.log(
                    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );

                // check player's health
                if (playerHealth <= 0) {
                    window.alert(payerName + " has died!");
                    break;
                } else {
                        window.alert(playerName + " still has " + playerHealth + " health remaining");
                    }   
            }

            if (promptFight === "fight" || promptFight === "FIGHT") {
                // remove enemy's health by subtracting the amount set in the player variable
                enemyHealth = enemyHealth - playerAttack;
                // Log a resulting message to the console so we know that it worked.
                console.log(
                    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                );

                // check enemy's health
                if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
                    // if the enemy-robot's health is zero or less, exit from the fight loop.
                    break;
                    }
                else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }

                // remove player's health by subtracting the amount set in the enemyAttack variable
                playerHealth = playerHealth - enemyAttack;
                // Log a resulting message to the console so we know that it worked.
                console.log(
                    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );

                // check player's health
                if (playerHealth <= 0) {
                    window.alert(payerName + " has died!");
                    break;
                } else {
                        window.alert(playerName + " still has " + playerHealth + " health remaining");
                    }

            // skip or SKIP prompt confirmation     
            }

            // condition variables (fight, FIGHT, skip, or SKIP) not declared by user
            else {
                window.alert("You need to choose a valid option. Try again!");
            }
    };

}
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}