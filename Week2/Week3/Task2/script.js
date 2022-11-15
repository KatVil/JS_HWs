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
    let result=document.getElementById("name").value;
    if (result == ''){
        alert('Please fill the name field')
    }
    
}

function CheckPhone(){
    let resultPhone=document.getElementById("phone").length;
    console.log(resultPhone)
    if (resultPhone < 12 || resultPhone > 15){
        alert('Please enter the correct phone')
    }
    
}
