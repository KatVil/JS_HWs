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
    let result=document.querySelector(".input-email").value;
    if (result == ''){
        alert('Please fill the name field')
    }
    
    //let resultEm=document.getElementById("email").value;
   // if (resultEm.HTMLElement.innerText.includes('@')){
    //    console.log(resultEm);
   // }
   /// else{
    //    alert('Please enter the correct email');
    //}
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