let currSubmenuBtn = null;
const humburger = document.querySelector(".nav-hamburger");
const navbar = document.querySelector("nav");
const navSubmenuBtns = document.querySelectorAll(
   ".nav-menus .menu .btn-submenu"
);
const desktopMediaQuery = window.matchMedia("(min-width: 901px)");
const mobileMediaQuery = window.matchMedia("(max-width: 900px)");

humburger.addEventListener("click", () => {
   if (navbar.classList.contains("open")) {
      navbar.classList.remove("open");
   } else {
      navbar.classList.add("open");
   }
});

navSubmenuBtns.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      if (currSubmenuBtn) {
         currSubmenuBtn.classList.remove("active");
      }
      if (currSubmenuBtn === e.currentTarget) {
         currSubmenuBtn = null;
         return;
      }
      currSubmenuBtn = e.currentTarget;
      currSubmenuBtn.classList.add("active");
   });
});

function handleChangeToDesktop(e) {
   // Check if the media query is true
   if (e.matches) {
      document.querySelector(".about-img").src =
         "/images/illustration-editor-desktop.svg";
      document.querySelector(".features-img").src =
         "/images/illustration-laptop-desktop.svg";
   }
}
// Register event listener
desktopMediaQuery.addEventListener("change", handleChangeToDesktop);
// Initial check
handleChangeToDesktop(desktopMediaQuery);

function handleChangeToMobile(e) {
   // Check if the media query is true
   if (e.matches) {
      document.querySelector(".about-img").src =
         "/images/illustration-editor-mobile.svg";
      document.querySelector(".features-img").src =
         "/images/illustration-laptop-mobile.svg";
   }
}
// Register event listener
mobileMediaQuery.addEventListener("change", handleChangeToMobile);
// Initial check
handleChangeToMobile(mobileMediaQuery);
