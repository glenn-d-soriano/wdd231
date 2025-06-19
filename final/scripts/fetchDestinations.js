export const fetchDestinations = async () => {
    try {
        const response = await fetch("data/destinations.json");
        if (!response.ok) throw new Error("Failed to load destinations");
        const destinations = await response.json();
        return destinations;
    } catch (error) {
        throw error;
    }
};
