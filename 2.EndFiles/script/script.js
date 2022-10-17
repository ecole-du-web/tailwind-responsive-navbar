const toggleMenuBtn = document.querySelector("#menu-btn");
const toggleMenuImg = document.querySelector("#menu-btn img");
const toggledMenu = document.querySelector("#toggled-menu");
const menuLinks = document.querySelector("#main-nav ul a");

toggleMenuBtn.addEventListener("click", toggleNav);

function toggleNav(){
  toggledMenu.classList.toggle("-translate-y-full")

  if(toggledMenu.classList.contains("-translate-y-full")) {
    toggleMenuImg.setAttribute("src", "images/menu.svg")
    toggleMenuBtn.setAttribute("aria-expanded", "false")
  } 
  else {
    toggleMenuImg.setAttribute("src", "images/cross.svg")
    toggleMenuBtn.setAttribute("aria-expanded", "true")
  }
}