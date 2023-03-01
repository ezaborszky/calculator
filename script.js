
//VARIABLES 
let inputMode = false;
let num1 = 0;
let num2 = 0;
let operator = 0;
//0 addiition, 1 subtraction, 2 multiplication, 3 division

const display = document.querySelector(".display");



//FUNCTIONS

const refreshDisplay = function(input) {
    if (display.textContent === "0" || inputMode === true){
        
        display.textContent = input.textContent;
        
        inputMode = false;
    } 
    else if (display.textContent.length > 18){
        return 0;
    }else {
        display.textContent += input.textContent;
        inputMode = false;
    }
};

const outPut = function() {
    if (operator = "oper1") {
        display.textContent = num1 + num2;
        num2 = display.textContent*1;
    } else if (operator = "oper2") {
        display.textContent = num2 - num1;
        num2 = display.textContent*1;
    } else if (operator = "oper3") {
        display.textContent = num1 * num2;
        num2 = display.textContent*1;
    } else if (operator = "oper4") {
        display.textContent = num2 / num1;
        num2 = display.textContent*1; 
    } else {
        return 0;
    }
};

const addition = function() {
    inputMode = true;
    operator = 0;
    num2 = num1;
    if (num2 !== 0){outPut();}
    }


//BUTTONS
const buttonAC = document.querySelector ("#AC");
let numButtons = document.querySelectorAll("#number");
let allButtons = document.querySelectorAll("button");

//---------BUTTON FUNCTIONS 

//AC clear screen
buttonAC.addEventListener("click", () => 
{
    console.log("AC");
    display.textContent = "0";
    
});



//numbers
numButtons.forEach(function (i) {
  i.addEventListener('click', function() {
    refreshDisplay(i);
    inputMode = false;
  });
});




//VISUAL FUNCTIONS

allButtons.forEach(function(i) {
    
    i.addEventListener('mouseover', function() {
        i.classList.add("mouse-over");
    });
    i.addEventListener('mouseleave', function() {
        i.classList.remove("mouse-over");
    });

})