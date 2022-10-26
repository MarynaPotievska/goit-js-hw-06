const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const formElts = event.currentTarget.elements;
	
	if (formElts.email.value === "" || formElts.password.value === "") {
		alert ("Please fill in all the fields!")
	}

	const formData = {
		email: formElts.email.value,
		password: formElts.password.value,
	}

	console.log(formData);
	console.log( `Email: ${formData.email}, Password: ${formData.password}.`);
	event.currentTarget.reset();
})