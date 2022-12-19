const input = document.querySelector('#comment');
const container = document.querySelector('.cont_messages');
let str = input.value();


input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendComment();
    }
})

function sendComment() {
    const message = input.value;
    const finalMessage = checkSpam(message);
    showComment(finalMessage);
    input.value = '';
}

function checkSpam(str) {
   return str.replace(/xxx|viagra/ig, "***")

}

function showComment(str) {
    container.insertAdjacentHTML("beforeend", `<div class="message">${str}</div>`);
}
let errors = [];
function checkValidity(input) {
    let validity = input.validity;
    if (validity.patternMismatch) 
		{ errors.push('Неверный формат заполнения'); }
    if (validity.typeMismatch) 
		{ errors.push('Неверный тип входных данных'); }
    if (validity.valueMissing) 
		{ errors.push('Отсутствует обязательное значение'); }
}

function checkAll() {
let inputs = document.querySelectorAll("input");
for (let input of inputs) {
    checkValidity(input);
}
let errorDiv = document.querySelector('.errorsInfo');
errorDiv.innerHTML = errors.join('. \n');
}

function save ()  {
    let f = file1.files[0];
    if (f) {
        image1.src = URL.createObjectURL(f);
        localStorage.setItem('myImage', image1.src);
    }
    image1.src = localStorage.getItem('myImage')
}


function CheckMessage(){
    let author = document.getElementById("author").value;
    let ava = document.getElementById("ava").value;

    if (localStorage.getItem('name') == null){
        localStorage.setItem('name', author);
    }
    if (localStorage.getItem('name') == null){
        localStorage.setItem('name', ava);
        save();
    }
}
