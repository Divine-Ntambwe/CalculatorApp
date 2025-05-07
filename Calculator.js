function calc(num1,num2) {
    let sum = num1 + num2 ;
    let diff = num1 - num2 ;
    let product = num1*num2 ;
    let power = num1**num2 ;
    
    return "Sum = " + sum + "\n" + "Difference = " + diff + "\n" + "Product = " + product + "\n" + "Power = " +power;

}

function circle(r) {
    const pi = 3.14;

    let peri = 2*pi*r;
    let area = pi*r**2;

    return "Area = " + area + "\n" + "Perimeter = " + peri 
}

console.log(calc(3,3));
console.log("\n" + "Circle:");
console.log(circle(3));                                                    