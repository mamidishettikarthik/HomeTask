function addition() {
    let sum = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    console.log(sum);
}
function multiply() {
    let mul = array.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
    });
    console.log(mul);
}
function subtraction() {
    let sub = array[0] - array[1];
    console.log(sub);
}
function division() {
    let div = array[0] / array[1];
    console.log(div);
}
let args = require('minimist')(process.argv.slice(2));
let array = args['_'], operation = args['operation'];
validation();
function validation() {
    let count = 0;
    if (array.length == 0) {
        console.log("No Input given")
    }
    else {
        for (let num of array) {
            if (typeof (num) != 'number') {
                console.log("Invalid inputs given")
            }
            else {
                count++;
            }
            if (count == array.length) {
                Execute();
            }
        }
    }
}
function Execute() {
    switch (operation) {
        case "addition": addition();
            break;
        case "multiply": multiply();
            break;
        case "subtraction":
            if (array.length != 2) {
                console.log("Invalid number of arguments");
                break;
            }
            else {
                subtraction();
                break;
            }
        case "division":
            if (array.length != 2) {
                console.log("Invalid number of arguments");
                break;
            }
            else {
                division();
                break;
            }
        default:
            console.log("Invalid arguments");
    }
}


