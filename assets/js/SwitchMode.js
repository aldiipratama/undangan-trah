const mode = document.querySelector(".theme-controller");
const html = document.documentElement;
const dataTheme = html.getAttribute("data-theme");

mode.addEventListener("click", () => {
  if (mode.checked) {
    localStorage.setItem("theme", "dracula");
    html.setAttribute("data-theme", "dracula");
  } else {
    html.setAttribute("data-theme", "cupcake");
    html.classList.remove("dark");
  }
});
