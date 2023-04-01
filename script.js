class Calculator {

    constructor(previousOperandTextContent, currentOperandTextContent) {
        this.previousOperandTextContent = previousOperandTextContent
        this.currentOperandTextContent = currentOperandTextContent
        this.currentOperand = "";
        this.previousOperand = "";
        this.buttons = allButtons;
    }

clear() {
this.currentOperandTextContent.innerText ="";
this.previousOperandTextContent.innerText="";
this.currentOperand = "";
this.previousOperand = "";
this.operation = undefined;
}

delete() {
    if(this.currentOperand.includes("ERROR")) this.currentOperand = ""
    this.currentOperand = this.currentOperand.toString().slice(0,-1)

}

selectOperator (operation) {
    if(this.currentOperand.includes("ERROR")) this.currentOperand = ""
    if(this.currentOperand === "") return
    if(this.previousOperand !== "") {
        this.calculate()}
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = "";
}

calculate() {
let sum 
const previous = parseFloat(this.previousOperand)
const current = parseFloat(this.currentOperand)

if (isNaN(previous) || isNaN(current)) return
switch(this.operation) {
    case "+": 
        sum = previous + current
        break
    case "-":
        sum = previous - current
        break
    case "*": 
        sum = previous * current
        break
    case "/":
        if(current == 0) {
            sum = "ERROR" 
            break}else { sum = previous / current
                        break}
    default:
        return
    }
    this.currentOperand = sum
    this.operation = undefined
    this.previousOperand = ""

}

refreshDisplay() {
this.currentOperandTextContent.innerText = this.currentOperand;
if (this.operation != null) {
    this.previousOperandTextContent.innerText = `${this.previousOperand} ${this.operation}`
} else {this.previousOperandTextContent.innerText = this.previousOperand;}


}

appendNumber(number) {
    if(this.currentOperand.includes("ERROR")) this.currentOperand = ""
    if (number === "." && this.currentOperand.includes(".")) return
    this.currentOperand += number.toString();
    
}



}



const allClearButton = document.querySelector("[data-allclear]");
const deleteButton = document.querySelector("[data-delete]");
const operatorButtons = document.querySelectorAll("[data-operation]");
const numberButtons = document.querySelectorAll("[data-number]");
const equalButton = document.querySelector("[data-equal]");
const previousOperandTextContent = document.querySelector("[data-previous-operand]");
const currentOperandTextContent = document.querySelector("[data-current-operand]");
const allButtons = document.querySelectorAll("button")

const calculator = new Calculator(previousOperandTextContent,currentOperandTextContent)


numberButtons.forEach(button => {
    button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText)
    calculator.refreshDisplay();
})
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
    calculator.selectOperator(button.innerText);
    calculator.refreshDisplay();
    })
})

allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.refreshDisplay();
})

equalButton.addEventListener("click", () => {
    calculator.calculate();
    calculator.refreshDisplay();
})

deleteButton.addEventListener("click", () => {
    calculator.delete()
    calculator.refreshDisplay()}
)