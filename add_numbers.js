const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completetionCallback) {
    if (numsLeft > 0) {
        reader.question("Enter a number: ", input => {
            let num = parseInt(input);
            sum += num;
            numsLeft--;
            console.log(`The current sum is: ${sum}`);

            addNumbers(sum, numsLeft,completetionCallback);
            
            if (numsLeft === 0) {
                completetionCallback(sum);
                reader.close();
            };
        });
    };
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));