// Responsive Navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Footer Year and Last Modified
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Newsletter Form Submission
const form = document.getElementById("newsletter-form");
const message = document.getElementById("newsletter-message");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();

        // Basic email format check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(email)) {
            localStorage.setItem("newsletterEmail", email);
            message.textContent = "✅ Thank you for subscribing!";
            message.style.color = "green";
            form.reset();
        } else {
            message.textContent = "⚠️ Please enter a valid email address.";
            message.style.color = "red";
        }
    });
}
