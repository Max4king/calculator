/* Calculator.js
    Basic Calculator with GUI
    func + - * /
*/

function add(a,b) {return a + b;}
function subtract(a,b) {return a - b;}
function multiply(a,b) {return a * b;}
function divide(a,b) {return a / b;}

function operate(cur_operator, num1, num2) {
    console.log(cur_operator);
    //let ans = cur_operator(num1,num2);
    //return ans;
    return 1;
}

const display = document.querySelector(".display");
const num_buttons = document.querySelectorAll(".num");

let last_num = 0;
let next_num = 0;
let operator = null;
let num_done = false;

num_buttons.forEach ( (button) => {
    button.addEventListener("click", () => {
        if (operator === null) {
            last_num = parseInt(last_num + button.value);
            display.textContent = last_num;
        } else {
            next_num = parseInt(next_num + button.value);
            display.textContent = next_num;
        }
    })
})
const operators_buttons = document.querySelectorAll(".operator");

operators_buttons.forEach( button => {
    button.addEventListener( "click", () => {
        
        if (operator === null && !num_done) {
            operator = operator_check(button.value);
        }
        // figure out how to move function into a variable
        // Currently, it is giving a Nan instead of the function.
        console.log("Operator :", operator)
        if (operator !== null && !num_done) {
            last_num = operate( operator, last_num, next_num);
            num_done = true;
            operator = null;
        }

        if (num_done) {
            let temp = operator_check=(button.value);
            if (button.value === "operate" || temp !== null) {
                display.textContent = last_num;
            }
        }
    })
})

function operator_check(operator_value) {
    if(operator_value === "add") {
        console.log("This work")
        return add();
    }
    if(operator_value === "subtract") {
        return subtract;
    }
    if(operator_value === "divide") {
        return divide;
    }
    if(operator_value === "multiply") {
        return multiply;
    }
    return null;
}

const clear_btn = document.querySelector(".clearing");

clear_btn.addEventListener( "click", () => {
    last_num = 0;
    next_num = 0;
    operator = "";
    num_done = false;
    display.textContent = 0;
})