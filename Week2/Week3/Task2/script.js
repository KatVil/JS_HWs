function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

function CheckName(){
    let result=document.querySelector(".input-name").value;
    if (result == ''){
        alert('Please fill the name field')
    }
    
}

function CheckPhone(){
   // let resultPhone=document.getElementById("phone").length;
    let resultPhone=document.querySelector(".input-phone").length;
    if (resultPhone < 12 || resultPhone > 15){
        alert('Please enter the correct phone')
    }    
}

function CheckEmail(){
    let mailFormat =  /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    let result=document.querySelector(".input-email").value;
    if (result == ''){
        alert('Please fill the name field')
    }
    if (email.value.match(mailFormat)) {
        return true;
    }
    else {
        alert("Ваш адрес электронной почты введен неверно!");
        return false;
    }
}

function CheckPass(){
    let resultPassOne=document.getElementById("password-input").value;
    let resultPassTwo=document.getElementById("password-input-repeat").value;
    if (resultPassOne != resultPassTwo){
        alert('Passwords does not match!')
    }    
}

function Welcome(){
    let resultName=document.getElementById("name").value;
    let resultEmail=document.getElementById("email").value;
    let resultPassword=document.getElementById("password-input").value;
    if (resultName != "" && resultEmail != "" && resultPassword != "" ){
        alert('Welcome! :)')
    }
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