// main.js
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
}

init();
