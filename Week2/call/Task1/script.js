function InputFirstNum(){
    let number1 = document.querySelector('.num-first').value;
    //if (number1 === undefined) {
        //number1 = (`:( `);
   // } else {
    document.getElementById('num-first-result').innerHTML = number1; //write new info in some node
    return number1;
}
//}

function InputSecNum(){
    let number2 = document.querySelector('.num-sec').value;
    document.getElementById('num-sec-result').innerHTML = number2; //write new info in some node
    return number2;
}

function plus(){
    let number1 = document.querySelector('.num-first').value;
    let number2 = document.querySelector('.num-sec').value;
    let sum = Number(number1) + Number(number2); 
    document.getElementById('num-sum-result').innerHTML = sum;
    //if (number1 === null || number2 === null) {
        //alert(`:( `);
   // } else {
        //} else {
            //alert(`Nu, dopustium, myau...`);
        //}
    //alert(sum);   
//}
    return sum; 
}

function min(){
    let number1 = document.querySelector('.num-first').value;
    let number2 = document.querySelector('.num-sec').value;
    //if (number1 === null || number2 === null) {
       // alert(`:( `);
    //} else {
        let min = Number(number1) - Number(number2); 
        document.getElementById('num-min-result').innerHTML = min;
    return min; 
}
//}

function mult(){
    let number1 = document.querySelector('.num-first').value;
    let number2 = document.querySelector('.num-sec').value;
    let mult = Number(number1) * Number(number2); 
    document.getElementById('num-mult-result').innerHTML = mult;
    //if (number1 === null || number2 === null) {
        //alert(`:( `);
   // } else {
        //} else {
            //alert(`Nu, dopustium, myau...`);
        //}
    //alert(sum);   
//}
    return mult; 
}

function divide(){
    let number1 = document.querySelector('.num-first').value;
    let number2 = document.querySelector('.num-sec').value;
    let divide = Number(number1) / Number(number2); 
    
   // if (divide === Infinity){
        //divide = (`Division by 0 is permitted!`);
    //} else {
    document.getElementById('num-divide-result').innerHTML = divide;
    //}
    //if (number1 === null || number2 === null) {
        //alert(`:( `);
   // } else {
        //} else {
            //alert(`Nu, dopustium, myau...`);
        //}
    //alert(sum);   
//}
    return divide; 
}

function ChangeColor(){
    pass
}