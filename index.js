// document.querySelector
// insertAdjacentHTML
// addEventListener


document.querySelectorAll(".number-input").forEach((el) => {
    el.addEventListener("click", (e) => {
        document.querySelector(".result").value += e.target.value;
        document.querySelector(".result").value *= 1;
    })
})

document.querySelector(".clear").addEventListener("click", () => {
    // select the value of the result box
    // reassign the value to be 0
    document.querySelector(".result").value = 0;
})

document.querySelector(".negative-positive").addEventListener("click", () => {
    document.querySelector(".result").value *= -1;
})

document.querySelector(".percent").addEventListener("click", () => {
    document.querySelector(".result").value /= 100;
})

// 1. first number is inputted and stored
// 2. desired operation is selected
// 3. the result area is cleared
// 4. the second number is inputted and stored
// 5. the evaluate button is selected
// 6. the result is calculated and displayed 

let operator = "";
let num1 = 0;
let num2 = 0;

document.querySelectorAll(".operator").forEach((el) => {
    el.addEventListener("click", (e) => {
        num1 = parseFloat(document.querySelector(".result").value);
        console.log("num1: ", num1);
        operator =  e.target.value;
        document.querySelector(".result").value = "";
        return operator;
    })
})

document.querySelector(".evaluate").addEventListener("click", () => {
    num2 = parseFloat(document.querySelector(".result").value);
    console.log("num2: ", num2);
    switch (operator) {
        case "÷": 
            document.querySelector(".result").value = num1 / num2;
            break;
        case "x":
            document.querySelector(".result").value = num1 * num2;
            break;
        case "-":
            document.querySelector(".result").value = num1 - num2;
            break;
        case "+":
            document.querySelector(".result").value = num1 + num2;
            break;
        default:
            console.log("Not an appropriate operator!");
    }
})