document.addEventListener('DOMContentLoaded', () => {
    // Newsletter form handling
    const form = document.getElementById("newsletter-form");
    const message = document.getElementById("newsletter-message");
    const reviewCountSpan = document.getElementById("reviewCount");

    let subscriptionCount = Number(localStorage.getItem("subscriptionCount")) || 0;
    if (reviewCountSpan) {
        reviewCountSpan.textContent = subscriptionCount;
    }

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const emailInput = document.getElementById("email");
            const email = emailInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailPattern.test(email)) {
                localStorage.setItem("newsletterEmail", email);
                subscriptionCount++;
                localStorage.setItem("subscriptionCount", subscriptionCount);
                if (reviewCountSpan) reviewCountSpan.textContent = subscriptionCount;
                message.textContent = "✅ Thank you for subscribing!";
                message.style.color = "green";
                form.reset();
            } else {
                message.textContent = "⚠️ Please enter a valid email address.";
                message.style.color = "red";
            }
        });
    }

    // Footer dynamic year and last modified date
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const modifiedEl = document.getElementById("last-modified");
    if (modifiedEl) modifiedEl.textContent = document.lastModified;
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Replace the form with a confirmation message
            this.innerHTML = `
                <p class="confirmation-message">
                    ✅ Thank you! Your message has been sent.
                </p>
            `;
        });
    }
});

  