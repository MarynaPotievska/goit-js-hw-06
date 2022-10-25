const valuesRefs = {
	inputValue: document.querySelector('#name-input'),
	outputValue: document.querySelector('#name-output'),
}


valuesRefs.inputValue.addEventListener('input', (event) => {
	valuesRefs.outputValue.textContent = event.currentTarget.value;
});