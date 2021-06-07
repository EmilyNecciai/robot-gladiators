// RANDOMNESS [FUNTION]
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;
    return value;
};

// PLAYER NAME GET [FUNCTION]
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    window.alert("Your robot's name is " + name);
    return name;
};

// PLAYER INFO [OBJECT]
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 100,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 100
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars. You now have " + playerInfo.health + " health and " + (playerInfo.money - 7) + " money remaining.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars. You now have " + playerInfo.attack + " attack and " + (playerInfo.money - 7) + " money remaining.");
            this.attack += 6;
            this.money -=7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};

// ENEMY INFO [OBJECT]
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

// FIGHT OR SKIP [FUNCTION]
var fightOrSkip = function() {
    var promptFight = window.prompt('You have ' + playerInfo.health + ' health and ' + playerInfo.money + ' money. \n\nWould you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.')
    promptFight = promptFight.toLowerCase();

    if (promptFight === "skip") {
            if (promptFight === "" || promptFight === null) {
            window.alert("You need to provide a valid answer! Please try again.");
            return fightOrSkip();
        }

        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this round. Goodbye!");
                playerInfo.playerMoney = playerInfo.money - 10;
                return true;
            }
        }
    } else {
        return false;
    }
}
    

// FIGHT [FUNCTION & DECLARATION]
var fight = function(enemy) {

    // COIN FLIP FOR FIRST TURN
    var isPlayerTurn = true;
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }


    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
            
            if (fightOrSkip()) {
                break;
            }
            
                // FIGHT remove the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
                //Random damage value based on player's attack power
                var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
                enemy.health = Math.max(0, enemy.health - damage);
                console.log(
                playerInfo.name + ' attacked ' + enemy.name + ' at ' + damage + ' damage. \n' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
                );

                // enemy's health        
                if (enemy.health <= 0) {
                    window.alert(enemy.name + ' has died!');
                    console.log(playerInfo.name);


                    // win award
                    playerInfo.money = playerInfo.money + 20;

                    // leave while loop
                    break;
                    } else {
                    window.alert('You attacked for -' + damage + ' damage. \n' + enemy.name + ' still has ' + enemy.health + ' health left.');
                    }          
            } else {
                
                // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
                var damage = randomNumber(enemy.attack -3, enemy.attack);
                playerInfo.health = Math.max(0, playerInfo.health - damage);
                console.log(
                    enemy.name + ' attacked ' + playerInfo.name + ' at ' + damage + ' damage. \n' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
                );

                // player's health
                if (playerInfo.health <= 0) {
                    window.alert(playerInfo.name + ' has died!');
                    // leave while loop
                    break;
                } else {
                    window.alert('Opponent attacked: -' + damage + ' damage. \n' + playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
                }
            }
            isPlayerTurn = !isPlayerTurn;
        }
    };


//START GAME [FUNCTION]
var startGame = function() {
    //reset Player stats
    playerInfo.reset();

        // FIGHT FUNCTION: CALL - fight each enemy bot one at a time
        for (var i = 0; i < enemyInfo.length; i++) {

            if (playerInfo.health > 0) {
                window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
                console.log(playerInfo.name);
            
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
                // shop available if enemies remain.
                if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                    var storeConfirm = window.confirm("The fight is over. Visit the store before the next round?");

                    if (storeConfirm) {
                        shop();
                    }
                }
            }

            else {
            window.alert('You have lost your robot in battle! Game Over!');
            console.log(playerInfo.name);
            break;
            }   
        }
    //play again
    endGame();
};

// END GAME [FUNCTION]
var endGame = function() {
    window.alert("The game has new ended. Let's see how you did.");

    if (playerInfo.health > 0) {
        window.alert("Great job! You've survived the game! You now have a score of " + playerInfo.health + ".");
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

// SHOP [FUNCTION]
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to \nREFILL you health, \nUPGRADE your attack, or \nLEAVE the store? \nEnter: '1' to refill, '2' to upgrade, or '3' to leave the store."
    );

    shopOptionPrompt = parseInt(shopOptionPrompt);

    switch (shopOptionPrompt) {
        case 1:
        playerInfo.refillHealth();
        break;

        case 2:
            playerInfo.upgradeAttack();
        break;

        case 3:
            window.alert("Leaving the store.")
            break;

    
        default:
            window.alert("You did not pick a valid option. Try again.")
            shop();
            break;
    }
};

// START GAME [CALL FUNCTION]
    //Starts game after all other functions and definitions load
startGame();
