// displayDestinations.js
export const displayDestinations = (destinations) => {
    const container = document.querySelector("#destinations-container");
    destinations.forEach(dest => {
        const card = document.createElement("div");
        card.classList.add("destination-card");
        card.innerHTML = `
        <img src="${dest.image}" alt="${dest.name}">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
        <p><strong>Location:</strong> ${dest.location}</p>
      `;
        container.appendChild(card);
    });
};
  