const members = [
    {
        "name": "Jollibee Restaurant",
        "address": "1406 Ellice Ave, Winnipeg, MB R3G 0G4",
        "phone": "204-789-9824",
        "website": "https://www.jollibeefoods.com",
        "image": "images/jolibee.jpg",
        "membership": 3,
        "info": "A popular Filipino fast-food chain known for its fried chicken and spaghetti."
    },
    {
        "name": "Winnipeg Free Press",
        "address": "1355 Mountain Ave, Winnipeg, MB R2X 3B6",
        "phone": "204-697-7000",
        "website": "https://www.winnipegfreepress.com",
        "image": "images/winnipegfreepress.jpg",
        "membership": 2,
        "info": "A leading newspaper serving Winnipeg with local, national, and international news."
    },
    {
        "name": "Red River College",
        "address": "2055 Notre Dame Ave, Winnipeg, MB R3H 0J9",
        "phone": "204-632-3960",
        "website": "https://www.rrc.ca",
        "image": "images/redriver.jpg",
        "membership": 3,
        "info": "One of Manitoba's largest institutes of applied learning and research."
    },
    {
        "name": "Canada Life",
        "address": "100 Osborne St N, Winnipeg, MB R3C 3A5",
        "phone": "204-946-1190",
        "website": "https://www.canadalife.com",
        "image": "images/canadalife.jpg",
        "membership": 3,
        "info": "A Canadian insurance and financial services company."
    }
];

function getRandomSpotlights() {
    const spotlights = document.getElementById('spotlights');
    const eligible = members.filter(m => m.membership === 2 || m.membership === 3);
    const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

    selected.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');
        card.innerHTML = `
        <img src="${member.image}" alt="${member.name}" loading="lazy" />
        <h3>${member.name}</h3>
        <p>${member.info}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;
        spotlights.appendChild(card);
    });
}

getRandomSpotlights();
  