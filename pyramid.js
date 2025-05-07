let count = 8; 
let inverse = true ;
let character = "#";

function display(count,rowNum) {
    return  " ".repeat(count-rowNum) + character.repeat(2*rowNum -1) + " ".repeat(count-rowNum) ;

}

if (inverse) {
    for (let i = 1; i <= count ; i++) {
        console.log(display(count,i));
    }
} else {
    for (let i = count; i <= count && i !== 0 ; i--) {
        console.log(display(count,i));
    }
} 







   
    