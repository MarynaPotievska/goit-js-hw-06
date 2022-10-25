const refs = {
	counterValue: document.querySelector('#value').textContent,
	btns: document.querySelectorAll('button'),
}

refs.btns.forEach(btn => {
	btn.addEventListener('click', () => {		
		refs.counterValue = Number(refs.counterValue) + Number(btn.textContent);
		console.log(refs.counterValue);			
		document.querySelector('#value').textContent = refs.counterValue;
	})
});

// refs.btns.forEach(btn => {
// 	btn.addEventListener('click', () => {		
// 		if(btn.dataset.action === 'increment') {
//             refs.counterValue = Number(refs.counterValue) + 1;
// 			console.log(refs.counterValue);			
// 			document.querySelector('#value').textContent = refs.counterValue;
// 		}		
// 		else {
// 			refs.counterValue = Number(refs.counterValue) - 1;
// 			console.log(refs.counterValue);
// 			document.querySelector('#value').textContent = refs.counterValue;
// 		}				
// 	})
// });
