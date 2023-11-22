const listAnimal = document.querySelector('#categories');
console.log(`Number of categories: ${listAnimal.childElementCount}`);
const menuItems = document.querySelectorAll('#categories ul');
menuItems.forEach(item => {
  console.log(`Category: ${item.previousElementSibling.textContent}`);
  console.log(`Elements: ${item.childElementCount}`);
});
