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

function add() {
    const numberInput = getUserNumberInput();
    const initialResult = currentResult;  
    currentResult += numberInput;
    createWriteOutput(initialResult, '+', numberInput);
    writeLog('ADD', initialResult, numberInput, currentResult);
}

function subtract() {
    const numberInput = getUserNumberInput();
    const initialResult = currentResult;   
    currentResult -= numberInput;
    createWriteOutput(initialResult, '-', numberInput);
    writeLog('SUBTRACT', initialResult, numberInput, currentResult);
}

function multiply() {
    const numberInput = getUserNumberInput();
    const initialResult = currentResult; 
    currentResult *= numberInput;
    createWriteOutput(initialResult, '*', numberInput);
    writeLog('MULTIPLY', initialResult, numberInput, currentResult);
}

function divide() {
    const numberInput = getUserNumberInput();  
    const initialResult = currentResult; 
    currentResult /= numberInput;
    createWriteOutput(initialResult, '/', numberInput);
    writeLog('DIVIDE', initialResult, numberInput, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);