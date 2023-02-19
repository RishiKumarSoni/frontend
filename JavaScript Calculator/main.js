// let us create a calculator class and functions for all the functions 
// inside it, step by step
class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }

    clear() {
        // showing nothing when all-clear 'AC' button is pressed
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        // to remove the last element
        // slice the string from 0th element to 2ns last that is -1 element
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        // join with concatination and display as strings
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if (this.operation === '') return;

        if (this.previousOperand !== ''){
            this.result();
        }
        // if a symbol button is clicked update the previous and current variables
        this.operation = operation.toString();
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    result() {
        let computation;
        const previous = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)

        // if any one operand is empty then return 
        if(isNaN(previous) || isNaN(current)) return;

        // else use a switch case to do operations using local variables
        switch(this.operation) {
            case '+':
                computation = previous + current;
                break;
            case '+':
                computation = previous + current;
                break;
            case '-':
                computation = previous - current;
                break;
            case 'x':
                computation = previous * current;
                break;
            case '÷':
                computation = previous / current;
                break;
            default:
                break;
        }

        // update operands and the operation
        this.currentOperand = computation;
        this.previousOperand = '';
        this.operation = undefined;
    }

    updateDisplay(){
        // update previous and current output on every button click
        this.currentOperandText.innerText = this.currentOperand;
        
        if (this.operation != null){
            this.previousOperandText.innerText = `${this.previousOperand} ${this.operation}`;
        } else {
            this.previousOperandText.innerText = '';
        }
    }
}


// referenes for all the buttons
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');

const equalButton = document.querySelector('[data-equal]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');

const previousOperandText = document.querySelector('[data-previous]');
const currentOperandText = document.querySelector('[data-current]');

const calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalButton.addEventListener('click', () => {
    calculator.result();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})
