// ================= MENU =================
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

if (menuToggle) {
  menuToggle.onclick = () => {
    sidebar.classList.toggle("active");
  };
}

// ================= THEME =================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.onclick = () => {
    document.body.classList.toggle("light");
  };
}

// ================= TYPING FIX =================
const typingEl = document.getElementById("typing");
const text = "S. Reshad Hashemi";

if (typingEl) {
  typingEl.innerHTML = ""; // FIX duplicate
  let i = 0;

  function type() {
    if (i < text.length) {
      typingEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();
}

// ================= REVEAL FIX =================
function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal); // FIX

// ================= ACTIVE NAV FIX =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
