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
    console.log(logEntries);
}

function calculate(calcType) {

    const numberInput = getUserNumberInput();

    if(
        calcType !== 'ADD' && 
        calcType !== 'SUBTRACT' && 
        calcType !== 'MULTIPLY' && 
        calcType !== 'DIVIDE' ||
        !numberInput &&
        calcType !== 'MULTIPLY'
        ) {
            return;
    }

    const initialResult = currentResult; 
    let mathOperator;

    if(calcType === 'ADD') {
        currentResult += numberInput;
        mathOperator = '+';
    } else if(calcType === 'SUBTRACT') {
        currentResult -= numberInput;
        mathOperator = '-';
    } else if(calcType === 'MULTIPLY') {
        currentResult *= numberInput;
        mathOperator = '*';
    } else if(calcType === 'DIVIDE') {
        currentResult /= numberInput;
        mathOperator = '/';
    }
    
    createWriteOutput(initialResult, mathOperator, numberInput);
    writeLog(calcType, initialResult, numberInput, currentResult);
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

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);