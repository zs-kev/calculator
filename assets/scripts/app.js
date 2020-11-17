const defaultResult = 0;
let currentResult = 0,
    logEntries = [];

function getUserNumberInput() {
    return +userInput.value;
}

function createWriteOutput(resultBefore, operator, calcNum) {
    const calcDescription = `${resultBefore} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDescription); // From vendor.js file
}

function writeLog(operation, prevResult, inputNumber, newResult) {
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        inputNumber: inputNumber,
        result: newResult
    };

    logEntries.push(logEntry);
}

function add() {
    calculate('ADD');
}

function subtract() {
    calculate('SUBTRACT');
}

function multiply() {
    calculate('MULTIPLY');
}

function divide() {
    calculate('DIVIDE');
}

function calculate(operation) {
    const numberInput = getUserNumberInput();
    const initialResult = currentResult;
    let operator;

    if(operation === 'ADD') {
        currentResult += numberInput;
        operator = '+';
    } else if(operation === 'SUBTRACT') {
        currentResult -= numberInput;
        operator = '-';
    } else if(operation === 'MULTIPLY') {
        currentResult *= numberInput;
        operator = '*';
    } else if(operation === 'DIVIDE') {
        currentResult /= numberInput;
        operator = '/';
    }

    createWriteOutput(initialResult, operator, numberInput);
    writeLog(operation, initialResult, numberInput, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));