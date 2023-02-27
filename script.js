

//ELEMENTS

const display = document.querySelector(".display");



//FUNCTIONS

const refreshDisplay = function(input) {
    if (display.textContent === "0"){
        display.textContent = input.textContent;
    } 
    else if (display.textContent.length > 18){
        return 0;
    }else {
        display.textContent += input.textContent;
    }
};



//BUTTONS
const buttonAC = document.querySelector ("#AC");
const buttonPlusMin = document.querySelector("#plusmin");

let numButtons = document.querySelectorAll("#number");

//BUTTON FUNCTIONS 
buttonAC.addEventListener("click", () => 
{
    console.log("AC");
    display.textContent = "0";
});

buttonPlusMin.addEventListener("click", () =>
display.textContent = display.textContent*(-1)
);


numButtons.forEach(function (i) {
  i.addEventListener('click', function() {
    refreshDisplay(i);
  });
});