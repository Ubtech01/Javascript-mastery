const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2){
    const result = num1 + num2;
    return result;
}

const additionResult = add(1, 2);

currentResult = additionResult;

let calculationDescription = `( ${currentResult} + 10) * 3 / 2 - 1`;
outputResult(currentResult, calculationDescription);