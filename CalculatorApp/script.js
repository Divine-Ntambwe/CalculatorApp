function displayNum(num) {
    document.getElementById("screen").textContent += document.getElementById(num).textContent
}

function clearDisplay() {
    document.getElementById("screen").textContent=""
}

function equalTo() {
    let screenText = document.getElementById("screen").textContent;
    let signs = ["+","-","/","x"," "] ;

    for (i of screenText) {
        for (sign of signs) {
            if (sign === i) {
                screenText = screenText.replace(sign,"")
            } 
        }
    }

    document.getElementById("screen").textContent += " = " + screenText



}