const year = new Date().getFullYear();
const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

if (currentYear) {
  currentYear.textContent = year;
}

if (lastModified) {
  lastModified.textContent = `Last modified: ${document.lastModified}`;
}

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}
