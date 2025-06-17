export function setupContactForm() {
    const form = document.querySelector("#contact-form");
    const message = document.querySelector("#contact-message");

    if (!form || !message) {
        console.warn("Contact form or message container not found.");
        return;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim();
        const userMessage = form.elements.message.value.trim();
        const newsletterChecked = form.elements.newsletter.checked;

        if (name && email && userMessage) {
            let responseText = "Thank you for your message!";
            if (newsletterChecked) {
                responseText += " You have been subscribed to our newsletter.";
            }
            message.textContent = responseText;
            message.style.color = "green";
            form.reset();
        } else {
            message.textContent = "Please fill in all fields.";
            message.style.color = "red";
        }
    });
}
