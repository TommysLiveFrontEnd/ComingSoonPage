const index = document.querySelector('.contact-form');
let email = document.getElementById('email');
let small = document.getElementById('small');
let btnClear = document.querySelector('button');
let inputs = document.querySelector('input');


index.addEventListener('submit', (e)=>{
	e.preventDefault();

	let formData = {
		email: email.value
	}

	let xhr = new XMLHttpRequest();
	xhr.open('POST', '/');
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.onload = function() {
		console.log(xhr.responseText);
		if(xhr.responseText == 'success'){
			email.value = '';
		}else {
			alert('something went wrong')
		}
	}

	xhr.send(JSON.stringify(formData));

	checkInputs();
})


function checkInputs() {
	const emailValue = email.value;

	if(emailValue === '') {

	} else {
		setSucessFor(email);
	}
}

function setSucessFor(input) {
	const formController = input.parentElement;
	formController.className = 'form-controller success'
}



function validate(){
	var mail = document.getElementById('text').value;

	var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

	if(regx.text(mail)){
		alert()
		return true
	}
	else{
		alert()
		return false;
	}
}