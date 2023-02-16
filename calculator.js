/* Calculator.js
    Basic Calculator with GUI
    func + - * /
*/

function add(a,b) {return a + b;}
function subtract(a,b) {return a - b;}
function multiply(a,b) {return a * b;}
function divide(a,b) {return a / b;}

function operate(operator, num1, num2) {return operator(num1,num2);}

const num_buttons = document.querySelectorAll(".num");

let last_num = 0;
let next_num = 0;
let operator = "";
let num_done = false;

num_buttons.forEach ( (button) => {
    button.addEventListener("click", () => {
        if (operator === "") {
            last_num = parseInt(last_num + button.value);
        } else {
            next_num = parseInt(next_num + button.value);
        }
    })
})
const operators_buttons = document.querySelectorAll(".operator");

operators_buttons.forEach( button => {
    button.addEventListener( "click", () => {
        if(button.value === "add") {
            operator = add();
            num_done = true;
        }
        if(button.value === "subtract") {
            operator = subtract();
            num_done = true;
        }
        num_done = true;
        if (num_done) {
            if (button === "operate") {
            expression[3] = operate( operator, last_num, next_num);
            }
        }
    })
})

const clear_btn = document.querySelector(".clearing");

clear_btn.addEventListener( "click", () => {
    last_num = 0;
    next_num = 0;
    operator = "";
    num_done = false;
})