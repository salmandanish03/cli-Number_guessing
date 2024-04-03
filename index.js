#! /usr/bin/env node
import inquirer from "inquirer";
// Computer will generate a random number (done)
// User input for guessing the number (done)
// compare user input with computer generated number and show the result (done)
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number b/t 1-10: ",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the correct number");
}
else {
    console.log("You guessed the wrong number");
}
