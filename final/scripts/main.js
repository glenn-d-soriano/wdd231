import { fetchDestinations } from './fetchDestinations.js';
import { displayDestinations } from './ui.js';

const cardContainer = document.querySelector("#destination-cards");

const initialize = async () => {
    try {
        const destinations = await fetchDestinations();
        displayDestinations(destinations, cardContainer);
    } catch (error) {
        cardContainer.innerHTML = "<p>Failed to load destinations.</p>";
    }
};

initialize();
