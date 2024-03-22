#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate rendom number
// user guessing number
// cpmpare user number with computer generated number

const ramdomNumber=Math.floor(Math.random()*6+1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",

    }
]);

if(ramdomNumber < answer.userGuessedNumber){
    console.log(`your guessed number is greater than game number`);
}else if(ramdomNumber > answer.userGuessedNumber){
    console.log(`your guessed number is less than game number`);
}else{
    console.log(`congratulations you guessed the right number`);
};

