export const displayDestinations = (destinations) => {
    const cardContainer = document.querySelector("#destination-cards");
    cardContainer.innerHTML = "";  // clear old content

    destinations.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("destination-card");

        const isFavorite = getFavorites().includes(item.id.toString());

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="visit-site">Visit Site</a>
            <button class="more-info" data-id="${index}">More Info</button>
            <button class="favorite-btn ${isFavorite ? 'favorited' : ''}" data-id="${item.id}">
                ${isFavorite ? "★ Favorited" : "☆ Favorite"}
            </button>
        `;

        cardContainer.appendChild(card);

        // Modal dialog
        const dialog = document.createElement("dialog");
        dialog.setAttribute("id", `dialog-${index}`);
        dialog.setAttribute("aria-labelledby", `dialog-title-${index}`);
        dialog.setAttribute("aria-modal", "true");

        dialog.innerHTML = `
            <h3 id="dialog-title-${index}">${item.name}</h3>
            <address>${item.address}</address>
            <p>${item.moreDetails}</p>
            <button class="close-dialog">Close</button>
        `;
        document.body.appendChild(dialog);
    });

    addEventListeners();
};

const addEventListeners = () => {
    document.querySelectorAll(".more-info").forEach((btn) => {
        btn.addEventListener("click", () => {
            const index = btn.getAttribute("data-id");
            document.querySelector(`#dialog-${index}`).showModal();
        });
    });

    document.querySelectorAll(".close-dialog").forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.closest("dialog").close();
        });
    });

    document.querySelectorAll(".favorite-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            toggleFavorite(id, btn);
        });
    });
};

const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
};

const toggleFavorite = (id, btn) => {
    let favorites = getFavorites();

    if (favorites.includes(id)) {
        favorites = favorites.filter((fav) => fav !== id);
        btn.classList.remove("favorited");
        btn.textContent = "☆ Favorite";
    } else {
        favorites.push(id);
        btn.classList.add("favorited");
        btn.textContent = "★ Favorited";
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
};
