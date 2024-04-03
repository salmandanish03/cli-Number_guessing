import inquirer from "inquirer";
// Computer will generate a random number
// User input for guessing the number
// compare user input with computer generated number and show the result
const randomNumber = 17;
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number: ",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("You guessed the correct number");
}
else {
    console.log("You guessed the wrong number");
}
