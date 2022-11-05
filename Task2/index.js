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
    alert(sum);   
}
return sum; 
}

function mult(){
    let number1 = prompt('Input number 1');
    let number2 = prompt('Input number 2');            
    let mult_res = Number(number1) * Number(number2);
    if (number1 === null || number2 === null) {
        alert(`:( `);
    } else {
    alert(mult_res);
    }
return mult_res;
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
return minus_res;
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
return divide_res;
}