import { fetchDestinations } from "./fetchDestinations.js";
import { displayDestinations } from "./ui.js";
import { setupSubscribeForm } from "./subscribe.js";

async function init() {
    // Destination cards
    const cardsContainer = document.querySelector("#destination-cards");
    if (cardsContainer) {
        try {
            const destinations = await fetchDestinations();
            displayDestinations(destinations);
        } catch (error) {
            cardsContainer.innerHTML = "<p>Failed to load destinations.</p>";
            console.error(error);
        }
    }

    // Newsletter form
    const form = document.querySelector("#newsletter-form");
    if (form) {
        setupSubscribeForm();
    }

    // Year and last modified date
    const currentYearElem = document.getElementById("current-year");
    const lastModifiedElem = document.getElementById("last-modified");
    if (currentYearElem) currentYearElem.textContent = new Date().getFullYear();
    if (lastModifiedElem) lastModifiedElem.textContent = document.lastModified;

    // Hamburger menu toggle
    const menuToggle = document.querySelector("#menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("open");

            // Toggle aria-expanded for accessibility
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !expanded);

            // Toggle a class on the button for styling (e.g., active)
            menuToggle.classList.toggle('active');
        });
    }
}

// Call init() after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
