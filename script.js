// =========================
// SELINA MARCANO PORTFOLIO
// Luxury Interactions
// =========================

// Fade in sections on scroll
const revealElements = document.querySelectorAll(
  ".hero-text, .hero-image, .card, .about-image, .about-content, .service-grid div, .quote, .cta"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  element.classList.add("hidden");
  observer.observe(element);
});

// Navigation effect
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.padding = "18px 8%";
    nav.style.boxShadow = "0 8px 30px rgba(0,0,0,.08)";
  } else {
    nav.style.padding = "28px 8%";
    nav.style.boxShadow = "none";
  }
});

// Button hover animation
const buttons = document.querySelectorAll(".button, .button-outline");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-4px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});

// Card hover effect
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `
      perspective(1000px)
      rotateY(${(x - rect.width / 2) / 40}deg)
      rotateX(${(rect.height / 2 - y) / 40}deg)
      translateY(-10px)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  });
});