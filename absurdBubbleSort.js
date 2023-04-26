const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
        } else {
            sortCompletionCallback(arr);
            //reader.close();
        }
    }
    outerBubbleSortLoop(true);
}

// Function to recursively loop through array until sorted
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
            if (isGreaterThan) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
        })
    } else {
        outerBubbleSortLoop(madeAnySwaps);
        
        // ß // how did this beta get here?
    }

}

// const outerBubbleSortLoop = function(whatever) {
//     console.log("In outer bubble sort");
// }


// Function to get input from user
function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}? Type "yes" or "no".`, (answer) => {
        if (answer === "yes") {
            callback(true)
        } else {
            callback(false) 
        }
        //reader.close();
    })
    
}

arr1 = [2,3,1,9,3,10,6];

//innerBubbleSortLoop(arr1, 0, false, outerBubbleSortLoop);

absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted ß array: " + JSON.stringify(arr));
    reader.close();
  });