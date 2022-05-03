const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelectorAll("nav a");
const nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
for (link in nav_links) {
  nav_links[link].addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}
