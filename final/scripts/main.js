import { fetchDestinations } from "./fetchDestinations.js";
import { displayDestinations } from "./ui.js";
import { setupSubscribeForm } from "./subscribe.js";

async function init() {
    if (document.querySelector("#destination-cards")) {
        try {
            const destinations = await fetchDestinations();
            displayDestinations(destinations);
        } catch (error) {
            document.querySelector("#destination-cards").innerHTML = "<p>Failed to load destinations.</p>";
            console.error(error);
        }
    }

    if (document.querySelector("#newsletter-form")) {
        setupSubscribeForm();
    }

    // Update current year and last modified date
    const currentYearElem = document.getElementById("current-year");
    if (currentYearElem) {
        currentYearElem.textContent = new Date().getFullYear();
    }

    const lastModifiedElem = document.getElementById("last-modified");
    if (lastModifiedElem) {
        lastModifiedElem.textContent = document.lastModified;
    }
}

init();
