var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

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
                    console.log ("playerMoney", playerMoney);
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

// FIGHT FUNCTION: CALL - fight each enemy bot one at a time
for (var i = 0; i < enemyNames.length; i++) {

    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
      
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    }

    else {
        window.alert('You have lost your robot in battle! Game Over!');
        break;
    }   
}
