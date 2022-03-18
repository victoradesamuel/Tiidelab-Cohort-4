const closebt = document.querySelector('.times');
const hamb = document.querySelector('.bars');
const menu = document.querySelector('.mobile-menu');

closebt.addEventListener('click', () => {
  menu.style.display = 'none';
});
hamb.addEventListener('click', () => {
  menu.style.display = 'block';
});

document.querySelector('.nav-list').addEventListener('click', () => {
  menu.style.display = 'none';
});