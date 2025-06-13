// Responsive Navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Footer Year and Last Modified
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Newsletter form
const form = document.getElementById("newsletter-form");
const message = document.getElementById("newsletter-message");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        if (email) {
            localStorage.setItem("newsletterEmail", email);
            message.textContent = "Thanks for subscribing!";
            form.reset();
        }
    });
}
