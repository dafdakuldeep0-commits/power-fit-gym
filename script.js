// Page fade-in
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Join button action
const joinBtn = document.querySelector(".btn");

if (joinBtn) {
  joinBtn.addEventListener("click", () => {
    alert("Welcome to Power Fit Gym 💪🔥");
  });
}

// Navbar links (demo)
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Section coming soon 🚧");
  });
});