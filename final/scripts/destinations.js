// destinations.js
import { fetchDestinations } from "./js/fetchDestinations.js";
import { displayDestinations } from "./js/displayDestinations.js";

async function initDestinationsPage() {
    try {
        const data = await fetchDestinations();     // ✅ async + await
        displayDestinations(data);                  // ✅ display from module
    } catch (error) {
        console.error("Could not display destinations:", error);
    }
}

initDestinationsPage();
