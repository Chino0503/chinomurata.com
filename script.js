// =========================
// Mobile Navigation
// =========================
const mobileMenuButton = document.getElementById("mobileMenuButton");
const navList = document.getElementById("navList");

const toggleNav = () => {
  navList.classList.toggle("is-open");
};

const closeNav = () => {
  navList.classList.remove("is-open");
};

mobileMenuButton?.addEventListener("click", toggleNav);

navList?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

// =========================
// Scroll Reveal Animation
// =========================
const REVEAL_SELECTOR =
  ".gallery-item, .profile-container, .contact-content";

const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -10% 0px",
};

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => {
  revealObserver.observe(el);
});
