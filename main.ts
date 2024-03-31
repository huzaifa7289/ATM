import inquirer from "inquirer";

async function main() {
    let myBalance = 10000; // Dollar
    let myPin = 1234;

    let pinAnswer = await inquirer.prompt({
        name: "pin",
        message: "Enter your pin",
        type: "number"
    });

    console.log(pinAnswer.pin);

    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code!!!");

        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select an option",
                type: "list",
                choices: ["Withdraw", "Check balance"]
            }
        ]);

        // Perform operations based on the user's selection
        if (operationAns.operation === "Withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number"
                }
            ]);

            let withdrawAmount = amountAns.amount;
            if (withdrawAmount > myBalance) {
                console.log("Insufficient funds. Please enter a lower amount.");
            } else {
                myBalance -= withdrawAmount;
                console.log(`Withdrawn $${withdrawAmount}. Remaining balance: $${myBalance}`);
            }
        } else if (operationAns.operation === "Check balance") {
            console.log("Your balance is: $" + myBalance);
        }

    } else {
        console.log("Incorrect pin");
    }
}

main();

