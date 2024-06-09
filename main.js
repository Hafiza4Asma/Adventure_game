import inquirer from "inquirer";
//------------------------games variable-------------------------------------
let enemies = ["skeleton", "Zombie", "Warrior", "Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
//-----------------------player variable---------------------------------------
let heroHealth = 100;
let attackDamageToEnemy = 50;
let numHealthPortion = 3;
let healthPortionHealthAmount = 30;
let healthPortionDropChance = 50;
//------------------------------------while loop condition
let gameRunning = true;
console.log("Wellcome to DeadZone!");
Game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has appeared #\n`);
    while (enemyHealth > 0) {
        console.log(`Your Health: ${heroHealth}`);
        console.log(`${enemies} health: ${enemyHealth}`);
        let option = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "what would you like to do?",
            choices: ["1. Attack", "2. Take Health portion", "3.  Run"]
        });
        if (option.ans === "1. Attack") {
            let attackDamageToEnemy = 50;
            let damageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1);
            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= damageToEnemy;
            heroHealth -= damageToHero;
            console.log(`You strike the ${enemy} for ${damageToEnemy}`);
            console.log(`${enemy} strike you for ${damageToHero} damage.`);
            if (heroHealth < 1) {
                console.log("you have taken too much damage. you are too weak to continue.");
                break;
            }
        }
        else if (option.ans === "2. Taken Health portion") {
            if (numHealthPortion > 0) {
                heroHealth += healthPortionHealthAmount;
                numHealthPortion--;
                console.log(`you use health portion for ${healthPortionHealthAmount}`);
                console.log(`you now have ${heroHealth} health`);
                console.log(`you have ${numHealthPortion} health portion left.`);
            }
            else {
                console.log(`you have no health portion left. defeat nemy for a chance get health portion`);
            }
        }
        else if (option.ans === "3. Run") {
            console.log(`you run away from ${enemy}`);
            continue Game;
        }
    }
    if (heroHealth < 1) {
        console.log(`you are out from battle. you are too weak.`);
        break;
    }
    console.log(`${enemy} was defeated`);
    console.log(`you have ${heroHealth} health.`);
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < healthPortionDropChance) {
        numHealthPortion++;
        console.log(`enemy give you health prtion`);
        console.log(`your health is ${heroHealth}`);
        console.log(`your health portion is ${numHealthPortion}`);
    }
    let userOption = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "what would you like to do now",
        choices: ["1. continue", '2. Exit']
    });
    if (userOption.ans === "1. Continue") {
        console.log("you are continue on your adventure");
    }
    else {
        console.log("you successfully Exit from DeadZone");
        break;
    }
    console.log("Thank you for playing. \n");
}
