const navBar = document.querySelector('.navbar');
const toggleNav = document.querySelector('.btn-toggle');
const closeNavBar = document.querySelector('.navbar-close');

toggleNav.addEventListener('click', () => {
  navBar.style.width = '100%';
});

closeNavBar.addEventListener('click', () => {
  navBar.style.width = '0%';
});