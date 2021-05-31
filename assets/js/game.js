// PLAYER STATS
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// ENEMY STATS
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// FIGHT FUNCTION: DECLARE
var fight = function(enemyName) {

    while(enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // FIGHT
        if (promptFight === "fight" || promptFight === "FIGHT") {
                //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    
                enemyHealth = enemyHealth - playerAttack;
    
                // Log a resulting message to the console so we know that it worked.
                console.log(
                    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                );
    
                if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
                }
                else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }
    
                // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
                playerHealth = playerHealth - enemyAttack;
    
                // Log a resulting message to the console so we know that it worked.
                console.log(
                    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );
    
                if (playerHealth <= 0) {
                    window.alert(playerName + " has died!");
                }
                else {
                    window.alert(playerName + " still has " + playerHealth + " health left.");
                }
    
        // SKIP 
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerName + " has chosen to skip the fight!");
    
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            // CONFIRM SKIP
            if(confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // Skip Penalty
                playerMoney = playerMoney - 2;
            }
    
            // DON'T SKIP
            else {
                fight();
            }
    
        //INVALID
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
};



// FIGHT FUNCTION: CALL
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}