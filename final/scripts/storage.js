export const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
};

export const toggleFavorite = (id, btn) => {
    let favorites = getFavorites();
    if (favorites.includes(id)) {
        favorites = favorites.filter(fav => fav !== id);
        btn.classList.remove("favorited");
        btn.textContent = "☆ Favorite";
    } else {
        favorites.push(id);
        btn.classList.add("favorited");
        btn.textContent = "★ Favorited";
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
};
