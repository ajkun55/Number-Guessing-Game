console.log(`Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.

Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)`);

const prompt = require("prompt-sync")({sigint: true});

const choice = Number(prompt("Enter your choice: "));
console.log(`Great! You have selected the ${
  choice === 1 ? "Easy" : choice === 2 ? "Medium" : "Hard"
} difficulty level.
Let's start the game!`);

const times = choice === 1 ? 10 : choice === 2 ? 5 : 3;
const randomNumber = Math.floor(Math.random() * 100) + 1;

let foundCorrectNumber = false;
let attempts = 1;

while (!foundCorrectNumber && attempts <= times) {
  // Get user input
  let guess = prompt("Enter your guess: ");
  // Convert the string input to a number
  guess = Number(guess);

  if (!guess || isNaN(guess)) {
    console.log("You need to input a number");
  }

  // Compare the guess to the secret answer and let the user know.
  else if (guess === randomNumber) {
    console.log(
      `Congratulations! You guessed the correct number in ${attempts} attempts.`
    );
    foundCorrectNumber = true;
  } else if (guess > randomNumber) {
    console.log(`Incorrect! The number is less than ${guess}.`);
  } else {
    console.log(`Incorrect! The number is greater than ${guess}.`);
  }
  attempts += 1;
  if (attempts > times) {
    console.log(`You've run out of chances and the number is ${randomNumber}`);
  }
}
