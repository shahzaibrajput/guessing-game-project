import inquirer from "inquirer";
console.log("Guess a number between 1 to 100: ");
let randonNumber = Math.floor(Math.random() * 10 + 1);
async function guessNumber() {
    const answer = await inquirer.prompt([
        {
            name: "userguessednumber",
            type: "number",
            message: "Please guess a number",
        }
    ]);
    if (answer.userguessednumber === randonNumber) {
        console.log("Congratulations! you guessed the right number");
    }
    else {
        console.log(" you guessed the wrong number");
        console.log(randonNumber);
    }
}
guessNumber();
