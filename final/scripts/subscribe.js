export function setupSubscribeForm() {
    const form = document.querySelector("#newsletter-form"); 
    const message = document.querySelector("#newsletter-message");

    if (!form || !message) {
        console.warn("Subscribe form or message element not found.");
        return;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = form.querySelector("input[type='email']").value.trim();

        if (email) {
            message.textContent = "Thank you for subscribing!";
            message.style.color = "green";
            form.reset();
        } else {
            message.textContent = "Please enter a valid email address.";
            message.style.color = "red";
        }
    });
}
  