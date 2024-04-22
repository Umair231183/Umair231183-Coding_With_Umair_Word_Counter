#! /usr/bin/env node

// Importing inquirer and chalk 
import inquirer from "inquirer";
import chalk from "chalk";

// Welcome Message
console.log(chalk.bold.cyanBright("\n \t\t Coding With Umair - Word Counter"));
console.log("=".repeat(60));

// Prompt a user to Enter sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence"
    }
]);
// Triming and Splitting a Sentence
let words = answer.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Counter: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
