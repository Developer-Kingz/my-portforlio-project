let popup = document.getElementById("mobile-toggle")
let menubutton = document.getElementById("menu-hide")

function openMenu(){
 popup.classList.add("mobile-toggle-show")
 menubutton.classList.add("menu-hide")
 console.log("hello")
}
function closeMenu(){
 popup.classList.remove("mobile-toggle-show")
 menubutton.classList.remove("menu-hide")
}