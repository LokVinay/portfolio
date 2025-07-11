// script.js

// Theme toggle
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");
  const label = document.getElementById("mode-label");

  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    icon.classList.remove("fa-moon", "moon-glow");
    icon.classList.add("fa-sun", "sun-glow");
    label.textContent = "Light Mode";
  } else {
    icon.classList.remove("fa-sun", "sun-glow");
    icon.classList.add("fa-moon", "moon-glow");
    label.textContent = "Dark Mode";
  }
}

// Skill card hover effect
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill");
  skills.forEach(skill => {
    skill.addEventListener("mouseenter", () => {
      skill.classList.add("active");
    });
    skill.addEventListener("mouseleave", () => {
      skill.classList.remove("active");
    });
  });
});
