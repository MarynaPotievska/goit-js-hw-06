const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

const ingredientsList = [];

for (let i = 0; i < ingredients.length; i += 1) {
   const li = document.createElement('li');
   li.textContent = ingredients[i];
   li.className = "item";
   ingredientsList.push(li);
};

listRef.append(...ingredientsList);
console.log(listRef);