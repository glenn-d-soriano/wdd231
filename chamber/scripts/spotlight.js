async function getMembers() {
    try {
        const response = await fetch('data/members.json'); // Adjust path if needed
        const data = await response.json();
        displaySpotlights(data); // Pass the array directly
    } catch (error) {
        console.error("Failed to fetch member data:", error);
    }
}

function displaySpotlights(members) {
    const spotlights = document.getElementById('spotlights');
    const eligible = members.filter(m => m.membership === 2 || m.membership === 3);
    const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

    selected.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');
        card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" loading="lazy" />
        <h3>${member.name}</h3>
        <p>${member.info}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;
        spotlights.appendChild(card);
    });
}

getMembers();

console.log("Fetched data:", data);

