let display = document.getElementById('display');
let operationDisplay = document.getElementById('operation');
let currentInput = '';
let operator = '';
let firstValue = '';
let operation = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
    operation += value;
    operationDisplay.innerText = operation;
}

function appendOperator(op) {
    if (currentInput !== '') {
        firstValue = currentInput;
        operator = op;
        currentInput = '';
        display.value = operator;
        operation += ' ' + operator + ' ';
        operationDisplay.innerText = operation;
    }
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    firstValue = '';
    operator = '';
    operation = '';
    operationDisplay.innerText = '';
}

function calculateResult() {
    if (operator === '') return;
    let secondValue = currentInput;
    let result;

    switch (operator) {
        case '+':
            result = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            result = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case '*':
            result = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '/':
            if (parseFloat(secondValue) === 0) {
                alert("Division by zero is not allowed.");
                clearDisplay();
                return;
            }
            result = parseFloat(firstValue) / parseFloat(secondValue);
            break;
        default:
            break;
    }

    clearDisplay();
    display.value = result;
    currentInput = result;
    operator = '';
    operation = '';
    operationDisplay.innerText = '';
}
