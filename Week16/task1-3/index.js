const brands = document.querySelector('#brands');
const models = document.querySelector('#models');
const result = document.querySelector('.result');

let audiModels = ['a1', 'a2', 'tt', 'q3'];

const selectBrand = () => {

    if(brands.value == '0'){
        models.getElementsByClassName.display = 'none';
    }else{
        models.getElementsByClassName.display = 'block';
    }
    

    let options = ''
    if(brands.value = '300'){
        for(let model of audiModels){
            options += `<option value='1000'>${model}</option>`
        }     
    }
    models.innerHTML = options
}

const getSum = () => {
    result.innerHTML = `costs:${+brands.value+ +models.value}`
}