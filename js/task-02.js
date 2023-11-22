const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const markup = ingredients.map(item => `<li>${item}</li>`).join('');
list.insertAdjacentHTML('afterbegin', markup);
