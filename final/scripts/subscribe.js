export function setupSubscribeForm() {
    

    const form = document.querySelector("#newsletter-form");
    const message = document.querySelector("#newsletter-message");
    const counter = document.querySelector("#reviewCount");

    if (!form || !message) {
        
        return;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = form.querySelector("input[type='email']").value.trim();
        let count = parseInt(localStorage.getItem("newsletterCount") || "0");

        if (email) {
            count++;
            localStorage.setItem("newsletterCount", count);
            if (counter) counter.textContent = count;

            message.textContent = "Thank you for subscribing!";
            message.style.color = "green";
            form.reset();
        } else {
            message.textContent = "Please enter a valid email address.";
            message.style.color = "red";
        }
    });

    // Initialize counter on page load
    if (counter) {
        counter.textContent = localStorage.getItem("newsletterCount") || "0";
    }
}
