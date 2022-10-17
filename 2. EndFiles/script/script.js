const toggleMenuBtn = document.querySelector("#menu-btn");
const toggleMenuImg = document.querySelector("#menu-btn img")
const menuToggle = document.querySelector("#menu-toggle");
const menuLinks = document.querySelectorAll('#main-nav ul a')

menuLinks.forEach(navLink => navLink.addEventListener("click", toggleNav))

toggleMenuBtn.addEventListener("click", toggleNav);
function toggleNav() {
  menuToggle.classList.toggle("-translate-y-full");
  
  if(menuToggle.classList.contains("-translate-y-full")) {
    toggleMenuImg.setAttribute("src", "images/menu.svg")
    toggleMenuBtn.setAttribute("aria-expanded", "false")
  }
  else {
    toggleMenuImg.setAttribute("src", "images/cross.svg")
    toggleMenuBtn.setAttribute("aria-expanded", "true")
  }
}


