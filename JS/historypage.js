const menuIcon = document.querySelector('.icon');
const menuItems = document.querySelector('.menu');

menuIcon.addEventListener('click', function() {
  if (menuItems.style.display === 'block') {
    menuItems.style.display = 'none';
  } else {
    menuItems.style.display = 'block';
  }
});
