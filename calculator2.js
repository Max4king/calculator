function add(a,b) {return a + b;}
function subtract(a,b) {return a - b;}
function multiply(a,b) {return a * b;}
function divide(a,b) {return a / b;}

function calculate(cur_operator, num1, num2) {return cur_operator(num1,num2);}

const display = document.querySelector(".display");
const num_buttons = document.querySelectorAll(".num");

let last_num = 0;
let next_num = 0;

num_buttons.forEach( button => {
    button.addEventListener ( "click", () => {
        last_num = parseInt(last_num + button.value);
        display.textContent = last_num;
    });
});