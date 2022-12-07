const input = document.querySelector('.inputNumber');
const oneMoreBtn = document.querySelector('.oeMore');
const readyBtn = document.querySelector('.ready');
const error = document.querySelector('.error');
const result = document.querySelector('.result');
const sum = document.querySelector('.sum');

let arr = [];

const addOne = () => {
    let number = Number(input.value)
    if(number){
        arr.push(number);
        console.log(arr);
    } else {
        error.innerHTML = 'ERR'
    }
    result.innerHTML = arr;
    //result.value = '';
    document.querySelector(".inputNumber").value = ""
    ;
}
const getSum = () => {
    let res = 0;
     for(let i = 0; i<arr.length; i++){
        res = res + arr[i];
     }
     sum.innerHTML = res;
}

oneMoreBtn.addEventListener('click', addOne);
readyBtn.addEventListener('click', getSum)