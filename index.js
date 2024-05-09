#!/user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: "Enter your first number" },
    { type: "number",
        name: "numberTwo",
        message: "Enter your second number" },
    { type: "list",
        name: "operator",
        message: "select an operator",
        choices: ["+", "-", "*", "/", "^", "sqrt", "%"] },
]);
const { numberOne, numberTwo, operator } = answers;
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    case "^":
        result = Math.pow(numberOne, numberTwo);
        break;
    case "sqrt":
        result = Math.sqrt(numberOne);
        break;
    case "%":
        result = numberOne % numberTwo;
    default:
        console.log("invalid operator");
        break;
}
console.log(chalk.yellow(`${numberOne}${operator}${numberTwo}=${result}`));
