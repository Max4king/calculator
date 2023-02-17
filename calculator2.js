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
        console.log("num1: ",last_num);
        console.log("num2: ", next_num);
    });
});

operators.forEach( button => {
    button.addEventListener( "click", () => {
        console.log(button.value, "is pressed");
        if (second_input && operator_used){
            if (next_num === 0 && operator_func === divide) {
                console.log("This is an error!!!!!!!!!!!!");
                display.textContent = "ERROR GOT YA!";
                last_num = 0;
                next_num = 0;
                operator_func = undefined;
                operator_used = false;
                first_input = false;
                second_input = false;
                return;
            }
            let ans = calculate(operator_func, last_num, next_num);
            ans = Math.round(ans * 1000) / 1000;
            display.textContent = ans;
            last_num = ans;
            operator_used = false;
            operator_func = undefined;
            next_num = 0;
            second_input = false;
        }
        if (button.value !== "operate") {
            operator_func = operator_check(button.value);
            operator_used = true;
            first_input = true;
            console.log("operator_used", operator_used)

        } 
        console.log("num1: ",last_num);
        console.log("num2: ", next_num);
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