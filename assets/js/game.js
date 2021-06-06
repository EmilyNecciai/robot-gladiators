var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 100;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
var playerName = window.prompt("What is your robot's name?");



// FIGHT FUNCTION: DECLARE
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

            // SKIP 
            if (promptFight === "skip" || promptFight === "SKIP") {
    
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
                // CONFIRM SKIP
                if(confirmSkip) {
                    window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                    // Skip Penalty
                    playerMoney = playerMoney - 10;
                    console.log("playerMoney: " + playerMoney);
                    break;
                }
            }        
        
            // FIGHT remove the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
              playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
            );

            // enemy's health        
            if (enemyHealth <= 0) {
                window.alert(enemyName + ' has died!');
                console.log(playerName);


                // win award
                playerMoney = playerMoney + 20;

                // leave while loop
                break;
                } else {
                window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
                }
        
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
            );

            // player's health
            if (playerHealth <= 0) {
                window.alert(playerName + ' has died!');
                // leave while loop
                break;
            } else {
                window.alert(playerName + ' still has ' + playerHealth + ' health left.');
              }
            }
          };



var startGame = function() {
    //reset Player stats
    playerAttack = 10;
    playerHealth = 100;
    playerMoney = 100;

        // FIGHT FUNCTION: CALL - fight each enemy bot one at a time
        for (var i = 0; i < enemyNames.length; i++) {

            if (playerHealth > 0) {
                window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
                console.log(playerName);
            
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
                // shop available if enemies remain.
                if (playerHealth > 0 && i < enemyNames.length - 1) {
                    var storeConfirm = window.confirm("The fight is over. Visit the store before the next round?");

                    if (storeConfirm) {
                        shop();
                    }
                }
            }

            else {
            window.alert('You have lost your robot in battle! Game Over!');
            console.log(playerName);
            break;
            }   
        }
    //play again
    endGame();
};

// function to end the entire game
var endGame = function() {
    window.alert("The game has new ended. Let's see how you did.");

    if (playerHealth > 0) {
        window.alert("Great job! You've survived the game! You now have a score of " + playerHealth + ".");
    } else {
       window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart
        startGame();        
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// SHOP FUNCTION
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to \nREFILL you health, \nUPGRADE your attack, or \nLEAVE the store? \nPlease ender one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":

            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;

        case "UPGRADE":
        case "upgrade":

            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.")
            break;

    
        default:
            window.alert("You did not pick a valid option. Try again.")
            shop();
            break;
    }
};

//Start game after all other functions and definitions load
startGame();
