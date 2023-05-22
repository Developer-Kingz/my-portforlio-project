const popup = document.getElementById('mobile-toggle');
const menubutton = document.getElementById('menu-hide');

function openMenu() {
  popup.classList.add('mobile-toggle-show');
  menubutton.classList.add('menu-hide');
}
openMenu();
function closeMenu() {
  popup.classList.remove('mobile-toggle-show');
  menubutton.classList.remove('menu-hide');
}
closeMenu();