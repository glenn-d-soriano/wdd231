document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("newsletter-form");
    const message = document.getElementById("newsletter-message");
    const reviewCountSpan = document.getElementById("reviewCount");

    // Initialize count from localStorage or zero
    let subscriptionCount = Number(localStorage.getItem("subscriptionCount")) || 0;
    reviewCountSpan.textContent = subscriptionCount;

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const emailInput = document.getElementById("email");
            const email = emailInput.value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailPattern.test(email)) {
                // Save email to localStorage (optional: could save as list, but here just one for demo)
                localStorage.setItem("newsletterEmail", email);

                // Increase count and update storage/display
                subscriptionCount++;
                localStorage.setItem("subscriptionCount", subscriptionCount);
                reviewCountSpan.textContent = subscriptionCount;

                message.textContent = "✅ Thank you for subscribing!";
                message.style.color = "green";
                form.reset();
            } else {
                message.textContent = "⚠️ Please enter a valid email address.";
                message.style.color = "red";
            }
        });
    }
});
  