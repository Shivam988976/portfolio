// --- MOBILE NAVIGATION LOGIC ---
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");
const navOverlay = document.getElementById("navOverlay");
const navLinks = document.querySelectorAll("nav a");

// Function to open/close menu
function toggleMenu() {
  nav.classList.toggle("show");
  navOverlay.classList.toggle("show");
}

// Event Listeners for menu buttons
menuToggle.addEventListener("click", toggleMenu);
navOverlay.addEventListener("click", toggleMenu);

// Close menu automatically when a link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
    navOverlay.classList.remove("show");
  });
});

// --- OPTIMIZED SCROLL ANIMATION ---
// Using IntersectionObserver is better for performance than 'window.onscroll'
const observerOptions = {
  threshold: 0.15 // Triggers when 15% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      // Optional: Stop observing after it has faded in
      // observer.unobserve(entry.target); 
    }
  });
}, observerOptions);

// Attach the observer to all fade-in elements
document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});