ScrollReveal().reveal("#main h1", {
  delay: 500,
  easing: "ease",
  origin: "top",
  distance: "40px",
  reset: true,
});

ScrollReveal().reveal("#main h4", {
  delay: 600,
  easing: "ease",
  origin: "top",
  distance: "35px",
  reset: true,
});

ScrollReveal().reveal("#main p", {
  delay: 650,
  easing: "ease",
  origin: "top",
  distance: "35px",
  reset: true,
});

ScrollReveal().reveal(".simply-countdown .simply-section:nth-child(1)", {
  delay: 700,
  easing: "ease",
  origin: "top",
  distance: "50px",
  reset: true,
});

ScrollReveal().reveal(".simply-countdown .simply-section:nth-child(2)", {
  delay: 750,
  easing: "ease",
  origin: "top",
  distance: "50px",
  reset: true,
});

ScrollReveal().reveal(".simply-countdown .simply-section:nth-child(3)", {
  delay: 800,
  easing: "ease",
  origin: "top",
  distance: "50px",
  reset: true,
});

ScrollReveal().reveal(".simply-countdown .simply-section:nth-child(4)", {
  delay: 850,
  easing: "ease",
  origin: "top",
  distance: "50px",
  reset: true,
});

ScrollReveal().reveal(".reveal-down", {
  delay: 900,
  easing: "ease",
  origin: "top",
  distance: "50px",
  reset: true,
});

ScrollReveal().reveal(".switch-mode", {
  delay: 500,
  easing: "ease-out",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#info h2", {
  delay: 500,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#info img.avatar", {
  delay: 550,
  easing: "ease-in-out",
  origin: "top",
  rotate: {
    x: 180,
    y: 180,
    z: 10,
  },
});

ScrollReveal().reveal("#info .p1", {
  delay: 650,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#info h3", {
  delay: 700,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#info hr", {
  delay: 750,
  easing: "ease",
  origin: "top",
  scale: 0,
});

ScrollReveal().reveal("#info .p2", {
  delay: 800,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#info .wrapper-info .wrapper-kalender", {
  delay: 850,
  easing: "ease",
  origin: "top",
  distance: "40px",
});

ScrollReveal().reveal("#info .wrapper-info add-to-calendar-button", {
  delay: 950,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#info .wrapper-info .wrapper-card .card", {
  delay: 1000,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#info .wrapper-info iframe", {
  delay: 1050,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#rsvp h2", {
  delay: 500,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#rsvp p", {
  delay: 550,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#rsvp form .form-control:nth-child(1)", {
  delay: 600,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#rsvp form .form-control:nth-child(2)", {
  delay: 650,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#rsvp form .form-control:nth-child(3)", {
  delay: 700,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#ending p:nth-child(1)", {
  delay: 500,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#ending p:nth-child(2)", {
  delay: 550,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal("#ending p:nth-child(3)", {
  delay: 600,
  easing: "ease",
  origin: "top",
  distance: "50px",
});

const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");

setTimeout(() => {
  arrowRight.style.display = "block";
  arrowLeft.style.display = "block";
  setInterval(() => {
    arrowRight.style.display = "none";
    arrowLeft.style.display = "none";
  }, 2500);
}, 3000);
