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