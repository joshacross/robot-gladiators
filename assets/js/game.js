//Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE"
//  * Player robot's health is zero or less

// function to start a new game
var startGame = function() {
      // reset player stats
    playerInfo.reset();

    // fight each enemy robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {

            // let player know what round they are in
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];
        
            // reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);
        
            // use debugger to pause script from running and check what's going on at that moment in the code
            //debugger;
        
            // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);
        } 
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame ();
};

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } 
    else {
      window.alert("You've lost your robot in battle.");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
      // restart the game
      startGame();
    } 
    else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var fightOrSkip = function() {
  // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // Conditional Recursive Function Call
  if (promptFight === "" || promptFight === null || promptFight === "null") {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }

  // change user input alpha values to lowercase
  promptFight = promptFight.toLowerCase();

  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping, but don't let them go into the negative
      playerInfo.money = Math.max(0, playerInfo.money - 10);
  
      // return true if player wants to leave
      return true;
    }
  }
  return false;
}

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  console.log(enemy);
  while (enemy.health > 0 && playerInfo.health > 0) {
    // ask player if they'd like to fight or run
    if (fightOrSkip()) {
      //if true, leave fight by breaking loop
      break;
    }

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    // remove enemy's health by subtracting the amount set in the damage variable
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );
      
          // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // // leave while() loop since enemy is dead
      // break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // // leave while() loop if player is dead
      // break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  };
}
  
// go to shop between battles function
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
  );

  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case 'refill':
    case 'REFILL':
      playerInfo.refillHealth();
      break;
    case 'upgrade':
    case 'UPGRADE':
      playerInfo.upgradeAttack();
      break;
    case 'leave':
    case 'LEAVE':
      window.alert('Leaving the store.');
      break;
    default:
      window.alert('You did not pick a valid option. Try again.');
      shop();
      break;
  }
};

// function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// function to set name
var getPlayerName = function() {
  var name = "";

while (name === "" || name === null) {
  name = prompt("What is your robot's name?");
}

console.log("Your robot's name is " + name);
return name;
};

// player info object
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }
};

console.log(playerInfo.name, playerInfo.attack, playerInfo.health, playerInfo.money);
  
// enemy info object array
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

// start first game when page loads
startGame();


/*Empty player names are accepted.

Selecting Cancel in the player-name prompt assigns "null" as the player's name.

Empty or mixed-case (for example, Skip, SkIp, skiP, etc.) input to the fight-or-skip prompt results in the fight option being chosen.

They also asked for the following new features:

Ability to save the high score.

Randomize who attacks first in each new confrontation.

Simplify the input process for the shop() prompt to reduce the amount of typing needed to reply to prompts.

As we complete the tasks for this lesson, we will learn how to do the following:

Store data by using the Web Storage API.

Validate player prompts by using the while loop.

Add more variability to the game by using the Math.random() function. */
