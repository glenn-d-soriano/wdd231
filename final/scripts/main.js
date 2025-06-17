import { fetchDestinations } from "./fetchDestinations.js";
import { displayDestinations } from "./ui.js";
import { setupSubscribeForm } from "./subscribe.js";

async function init() {
    try {
        const destinations = await fetchDestinations();
        displayDestinations(destinations);
    } catch (error) {
        document.querySelector("#destination-cards").innerHTML = "<p>Failed to load destinations.</p>";
        console.error(error);
    }

    setupSubscribeForm();
}

init();
