const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
for (let i = 0; i < ingredients.length; i += 1) {
  const item = document.createElement('li');
  item.textContent = `${ingredients[i]}`;
  item.classList.add('item');
  list.append(item);
}
