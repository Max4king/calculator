/* Calculator.js
    Basic Calculator with GUI
    func + - * /
*/

function add(a,b) {return a + b;}
function subtract(a,b) {return a - b;}
function multiply(a,b) {return a * b;}
function divide(a,b) {return a / b;}

function calculate(cur_operator, num1, num2) {return cur_operator(num1,num2);}

const display = document.querySelector(".display");
const clear_ac = document.querySelector(".clearing");
const num_buttons = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator")

let last_num = 0;
let next_num = 0;
let operator_func = undefined;
let operator_used = false;
let first_input = false;
let second_input = false;

num_buttons.forEach( button => {
    button.addEventListener ( "click", () => {
        if (!operator_used && !first_input){
            last_num = parseInt(last_num + button.value);
            display.textContent = last_num;
        } else {
            next_num = parseInt(next_num + button.value);
            display.textContent = next_num;
            second_input = true;
        }
    });
});

operators.forEach( button => {
    button.addEventListener( "click", () => {
        console.log(button.value, "is pressed");
        if (button.value !== "operate") {
            operator_func = operator_check(button.value);
            operator_used = true;
            first_input = true;
            console.log("operator_used", operator_used)

        } 
        if (second_input){ 
            let ans = calculate(operator_func, last_num, next_num);
            display.textContent = ans
            last_num = ans;
            operator_used = false;
            operator_func = undefined;
            next_num = 0;
        }
        
    });
});

clear_ac.addEventListener( "click", () => {
    last_num = 0;
    next_num = 0;
    operator_func = undefined;
    operator_used = false;
    first_input = false;
    second_input = false;
    display.textContent = 0;
})




function operator_check(operator_value) {
    if(operator_value === "add") {
        return add;
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
    console.log("This does not work");
    return;
}