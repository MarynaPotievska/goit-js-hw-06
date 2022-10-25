const categoriesQuantity = document.querySelector('#categories').children.length;
console.log('Number of categories:', categoriesQuantity);

document.querySelectorAll('.item').forEach(item => {
	console.log('Category:', item.firstElementChild.textContent);
	console.log('Elements:', item.querySelector('ul').children.length);
});