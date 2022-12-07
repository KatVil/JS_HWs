const brands = document.querySelector('#brands');
const models = document.querySelector('#models');
const result = document.querySelector('.result');

let audiModels = ['a1', 'a2', 'tt', 'q3'];
let jigulModels = ['b1', 'b2', 'qt', 'q4'];
let kiaModels = ['c1', 'c2', 'ct', 'qc'];
let nissanModels = ['d1', 'a2', 'tt', 'd3'];

const selectBrand = () => {

    if(brands.value == '0'){
        models.getElementsByClassName.display = 'none';
    }else{
        models.getElementsByClassName.display = 'block';
    }
    

    let options = ''
    if(brands.value = '300'){
        for(let model of audiModels){
            options += `<option value='300'>${model}</option>`
        }     
    }
    else if (brands.value = '100'){
        for(let model of jigulModels){
            options += `<option value='100'>${model}</option>`
        }     
    }
    else if (brands.value = '400'){
        for(let model of kiaModels){
            options += `<option value='400'>${model}</option>`
        }     
    }
    else if (brands.value = '500'){
        for(let model of nissanModels){
            options += `<option value='500'>${model}</option>`
        }     
    }
    models.innerHTML = options
}

const getSum = () => {
    result.innerHTML = `costs:${+brands.value+ +models.value}`
}