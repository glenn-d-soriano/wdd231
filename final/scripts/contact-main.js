// contact-main.js
import { setupContactForm } from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector("#contact-form")) {
        setupContactForm();
    }
});

