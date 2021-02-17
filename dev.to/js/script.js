const asideLeft = document.querySelector(".aside-left");
const toggleMenu = document.querySelector(".toggle-menu");

toggleMenu.addEventListener("click", () => {
   asideLeft.style.display = "block";
});

document.querySelector(".join__close-button").addEventListener("click", () => {
   asideLeft.style.display = "none";
});

window.addEventListener("resize", () => {
   if (window.innerWidth >= 1020) {
      asideLeft.style.display = "block";
   } else {
      asideLeft.style.display = "none";
   }
});
