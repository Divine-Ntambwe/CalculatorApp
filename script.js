function displayNum(num) {
    const screen = document.getElementById("screen");
    screen.textContent += document.getElementById(num).textContent;
}

function clearDisplay() {
    const screen = document.getElementById("screen");
    screen.textContent=""
}

let num1 ;
let sign ;


function operate(operator) {
    const screen = document.getElementById("screen");
    num1 = screen.textContent;
    sign = document.getElementById(operator).textContent;
    screen.textContent += "  " + document.getElementById(operator).textContent + "  "  
}

function equalTo() {
    const screen = document.getElementById("screen");
    let screenText = screen.textContent;
    let ans ;
    let num2 ;
    num2 = screenText.slice(screenText.indexOf(sign)+2,screenText.length);
    num1 = Number(num1);
    num2 = Number(num2);

    if (sign === "+") {
        ans = num1 + num2;

    } else if (sign === "-") {
        ans = num1 - num2;

    } else if (sign === "/") {
        ans = num1 / num2;

    } else if (sign === "x") {
        ans = num1 * num2;

    }


   
    screen.textContent += " = " + ans



}