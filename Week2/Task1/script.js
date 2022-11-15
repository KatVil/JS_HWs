function InputFirstNum(){
    let number1 = document.querySelector('.num-first').value;
    //if (number1 === undefined) {
        //number1 = (`:( `);
    //} else {
        //continue InputFirstNum;
    //}
    document.getElementById('num-first-result').innerHTML = number1; 
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
    if (divide === Infinity || number2 === 0){
        alert(`Division by 0 is permitted!`);
    } else {
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
}

function ChangeColor(){
    let elem = document.getElementById('num-first-result');
    let elem2 = document.getElementById('num-min-result');
    let elem3 = document.getElementById('num-divide-result');
    elem.style.background = 'violet';
    elem2.style.background = 'pink';
    elem3.style.background = 'darkorchid';
}

function select(sender){
    console.log(sender);
    sender.classList.add("selected")
}