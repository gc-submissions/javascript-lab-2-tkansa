"use strict";

// TODO - write your code here.
// arrow function
let randomDamage = () => Math.floor(Math.random() * 10) + 1;
//console.log(randomDamage());

// arrow function
let chooseOption = (opt1, opt2) => {
    let randomNum = Math.floor(Math.random() * 2);
    return (randomNum === 0 ? opt1 : opt2);
}
//console.log(chooseOption("a", "b"));

// function expression
let attackPlayer = function (health) {
    return health - randomDamage();
}

// arrow function
let logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}

// arrow function
let logDeath = (winner, loser) => {
    console.log(`${winner} defeats ${loser}`);
}

// arrow function
let isDead = (health) => (health <= 0 ? true : false);

// function declaration
function fight(player1, player2, player1health, player2health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2health = attackPlayer(player2health);
            logHealth(player2, player2health);
            if (isDead(player2health)) {
                logDeath(player1, player2);
                break;
            }
        }

        else {
            player1health = attackPlayer(player1health);
            logHealth(player1, player1health);
            if (isDead(player1health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}

fight("Moe", "Yuri", 100, 100);