document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav__list li a");
  const stars = document.getElementById("stars");
  const moon = document.getElementById("moon");
  const mountainsBehind = document.getElementById("mountains-behind");
  const text = document.getElementById("moon-text");

  const header = document.querySelector("header");
  const btn = document.querySelector(".hero__btn");

  Array.from(navLinks).forEach((element) => {
    element.addEventListener("click", () => {
      navLinks.forEach((link) => link.classList.remove("active"));
      element.classList.toggle("active");
    });
  });

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    stars.style.left = `${scroll * 0.25}px`;
    moon.style.top = `${scroll * 1.05}px`;
    mountainsBehind.style.top = `${scroll * 0.35}px`;
    text.style.marginRight = `${scroll * 3}px`;
    text.style.marginTop = `${scroll * 1.5}px`;
    btn.style.marginTop = `${scroll * 1.5}px`;
    header.style.top = `${scroll * 0.75}px`;
  });
});
