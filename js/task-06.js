const textInput = document.querySelector('#validation-input');


textInput.addEventListener('blur', (event) => {	
	if(event.currentTarget.value.length < Number(event.currentTarget.dataset.length)) {
		event.currentTarget.className = 'invalid';
	}
	else {event.currentTarget.className = 'valid'}
})