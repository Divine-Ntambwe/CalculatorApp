// GLOBAL VARIABLES
let num1;
let sign = ""; //gets the value from the text within the class .operators buttons
let num2;
let display = false;

function displayNum(num) {
  const screen = document.getElementById("screen");
  screen.textContent += num 
  display = true;
}

function clearDisplay() {
  const screen = document.getElementById("screen");
  screen.textContent = "";
  display = false
}

function displayAns(operator){
  if (display){
    let ans = 0;
    const screen = document.getElementById("screen");
    sign = document.getElementById(operator).textContent;
    num1 = screen.textContent;
    switch (sign) {
      case "2/": ans = Math.sqrt(num1);
      break;
      case "^2": ans = num1**2;
      break;
    } 
    screen.textContent = ans;
  }
}
function percentage(){
  const screen = document.getElementById("screen");
  let newNum;
  if (display) {
    if (getNum2()) {
      newNum = Number(num2)*0.01
      num2 = 5 ;
      screen.textContent = screen.textContent.slice(0,screen.textContent.lastIndexOf(num2.toString())) + newNum
    } else {
      num1 = screen.textContent;
      newNum = Number(num1)*0.01
      screen.textContent = newNum 
      num1 = 5;
    }
  }
}
function operate(operator) {
  if (display) {
    if (getNum2()) {
      equalTo()
    } 

    const screen = document.getElementById("screen");
      num1 = screen.textContent;
      sign = document.getElementById(operator).textContent;
      screen.textContent += " " + document.getElementById(operator).textContent + " ";
      display = false;
  }
} 

function getNum2() {
  const screen = document.getElementById("screen");
  let screenText = screen.textContent;
  
  if (screenText.indexOf(sign) == - 1 || screenText.indexOf(sign) == (screenText.length-2) || sign == "")  {
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
      let ans = 0;
       console.log(num2)
       console.log(num1)
       num1 = Number(num1);
       num2 = Number(num2);
    

      switch (sign) {
        case "+" :   ans = num1 + num2;
         break;

        case "-": ans = num1 - num2;
         break;
        
        case "/": ans = num1/num2;
         break;
         
        case "x": ans = num1*num2;
         break;

        case "^x": ans = num1 ** num2;
         break;



      }

      screen.textContent = ans;
    }
  }
}
