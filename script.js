// GLOBAL VARIABLES
let num1;
let sign;
let num2;
let display = false;

function displayNum(num) {
  const screen = document.getElementById("screen");
  screen.textContent += document.getElementById(num).textContent;
  display = true;
}

function clearDisplay() {
  const screen = document.getElementById("screen");
  screen.textContent = "";
  display = false
}

function operate(operator) {
  if (display) {
    if (getNum2()) {
      console.log("j");
      equalTo()
    } 

    const screen = document.getElementById("screen");
      num1 = screen.textContent;
      sign = document.getElementById(operator).textContent;
      screen.textContent +=
        " " + document.getElementById(operator).textContent + " ";
  }
}

function getNum2() {
  const screen = document.getElementById("screen");
  let screenText = screen.textContent;

  if (screenText.indexOf(sign) + 1 == screenText.length - 1) {
    return false;
  } else {
    num2 = screenText.slice(screenText.indexOf(sign) + 2, screenText.length);
    return true;
  }
}

function equalTo() {
  if (display) {
    if (getNum2()) {
      const screen = document.getElementById("screen");
      let ans;
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

      screen.textContent = ans;
    }
  }
}
