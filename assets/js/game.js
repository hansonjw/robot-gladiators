var playerName = window.prompt("What is your robot's name?");
console.log("Your robot's name is: " + playerName);
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Enemies, definition of...
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50; //This is duplicated???
var enemyAttack = 12; //should normally be 12, increase for debugging purposes

var fight = function(enemyName) {
  var round =0;

  while (playerHealth > 0 && enemyHealth > 0) {
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    // If 'skip' is not inputed, default is to fight
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    }
    else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    }
    else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};


var shop = function(){
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  switch (shopOptionPrompt) {

    case "refill":
    case "REFILL":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
  
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      break;

    case "upgrade":
    case "UPGRADE":
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

      // increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      break;

    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");
  
      // do nothing, so function will end
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");
  
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

var startGame = function(){
  //Reset player stats/variables
  //I do not think this is working as intended...
  var playerHealth = 100;
  var playerAttack = 10;
  var playerMoney = 10;

  for(var i = 0; i < enemyNames.length; i++) {

    if (playerHealth > 0) {
      alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);

      if (playerHealth > 0 && i < enemyNames.length - 1){
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
        if(storeConfirm){
          shop();
        }
      }

    } else {
        window.alert("You have lost you robot in battle! Game Over!");
        break;
    }
  }
  endGame();
};

var endGame = function(){
  
  if (playerHealth > 0) {
    window.alert("Great job, you survived the battles!  You now have a score of " + playerMoney + ".");
  }
  else{
    window.alert("You've lost your robot in battle...");
  }
  
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};


//Run the game
startGame();