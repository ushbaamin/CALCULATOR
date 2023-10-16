#! /usr/bin/env node
import inquirer from "inquirer";
const operators = ["+", "-", "/", "*"];
const calculate = (firstNumber, secondNumber, operator) => {
    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "/":
            return firstNumber / secondNumber;
        case "*":
            return firstNumber * secondNumber;
        default:
            throw new Error("invalid operator");
    }
};
const calculator = async () => {
    const { firstNumber } = await inquirer.prompt([{
            type: "number",
            name: "firstNumber",
            message: "Enter first number please",
        },
    ]);
    const { secondNumber } = await inquirer.prompt([{
            type: "number",
            name: "secondNumber",
            message: "enter second number",
        },
    ]);
    const { operator } = await inquirer.prompt([{
            name: "operator",
            type: "list",
            choices: operators,
            message: "Choose the operator which you want to perfrom.",
        },
    ]);
    const result = calculate(firstNumber, secondNumber, operator);
    console.log(result);
};
calculator();
