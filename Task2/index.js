function plus(){
    let number1 = prompt('Input number 1');
        if (number1){
            let number2 = prompt('Input number 2')
                if (number2){
                    let sum = Number(number1) + Number(number2);
                }
                return sum = Number(number1) + Number(number2);
        } //else {
            //alert(`Nu, dopustium, myau...`);
        //}    
}
alert(plus());

function mult(){
    let number1 = prompt('Input number 1');
        if (number1){
            let number2 = prompt('Input number 2')
                if (number2){
                    let mult_res = Number(number1) * Number(number2);
                }
                return mult_res = Number(number1) * Number(number2);
        } else {
            alert(`Nu, dopustium, myau...`);
        }
    alert(mult_res)
}
function minus(){
    let number1 = prompt('Input number 1');
        if (number1){
            let number2 = prompt('Input number 2')
                if (number2){
                    let minus_res = Number(number1) - Number(number2);
                }
                return minus_res = Number(number1) - Number(number2);
        } else {
            alert(`Nu, dopustium, myau...`);
        }
    alert(minus_res)
}
function divide(){
    let number1 = prompt('Input number 1');
        if (number1){
            let number2 = prompt('Input number 2')
                if (number2){
                    let divide_res = Number(number1) / Number(number2);
                }
                return divide_res = Number(number1) / Number(number2);
        } else {
            alert(`Nu, dopustium, myau...`);
        }
    alert(divide_res)
}