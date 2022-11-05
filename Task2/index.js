function plus(){
    let number1 = prompt('Input number 1');
    let number2 = prompt('Input number 2'); 
    sum = Number(number1) + Number(number2); 
    if (number1 === null || number2 === null) {
        alert(`:( `);
    } else {
        //} else {
            //alert(`Nu, dopustium, myau...`);
        //}
    //return sum = Number(number1) + Number(number2); 
    alert(sum);   
}
}

function mult(){
    let number1 = prompt('Input number 1');
    let number2 = prompt('Input number 2');            
    let mult_res = Number(number1) * Number(number2);
    if (number1 === null || number2 === null) {
        alert(`:( `);
    } else {
    //return mult_res = Number(number1) * Number(number2);
    alert(mult_res);
    }
}

function minus(){
    let number1 = prompt('Input number 1');
    let number2 = prompt('Input number 2');
    let minus_res = Number(number1) - Number(number2);
    if (number1 === null || number2 === null) {
        alert(`:( `);
    } else {
    alert(minus_res);
}
}

function divide(){
    let number1 = prompt('Input number 1'); 
    let number2 = prompt('Input number 2');
    let divide_res = Number(number1) / Number(number2);
    if (number1 === null || number2 === null) {
        alert(`:( `);
    } else if (divide_res === Infinity){
        alert(`Division by 0 is permitted!`);
    } else {
        alert(divide_res);
    }
}