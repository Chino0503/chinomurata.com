// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });

    // モバイルメニューが開いてたら閉じる（体験が良くなる）
    const navList = document.getElementById("navList");
    const btn = document.getElementById("mobileMenuButton");
    if (navList?.classList.contains("is-open")) {
      navList.classList.remove("is-open");
      btn?.setAttribute("aria-expanded", "false");
    }
  });
});

// Fade in on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("fade-in");
  });
}, observerOptions);

document
  .querySelectorAll(".gallery-item, .profile-container, .contact-content")
  .forEach((el) => observer.observe(el));

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobileMenuButton");
const navList = document.getElementById("navList");

if (mobileMenuButton && navList) {
  mobileMenuButton.addEventListener("click", () => {
    const willOpen = !navList.classList.contains("is-open");
    navList.classList.toggle("is-open", willOpen);
    mobileMenuButton.setAttribute("aria-expanded", String(willOpen));
  });
}
