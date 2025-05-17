document.addEventListener("DOMContentLoaded", () => {
    // Set Current Year and Last Modified
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    // Mobile Menu Toggle
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");
    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });
    }

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Directory View Toggle
    const gridBtn = document.getElementById("gridBtn");
    const listBtn = document.getElementById("listBtn");
    const directory = document.getElementById("directory");

    if (gridBtn && listBtn && directory) {
        gridBtn.addEventListener("click", () => {
            directory.classList.remove("list-view");
            gridBtn.classList.add("active");
            listBtn.classList.remove("active");
        });

        listBtn.addEventListener("click", () => {
            directory.classList.add("list-view");
            listBtn.classList.add("active");
            gridBtn.classList.remove("active");
        });
    }

    // Fetch and Display Business Data
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            displayBusinesses(data); // ✅ NOT data.businesses
        })
        .catch(error => console.error("Error loading business data:", error));
});

function displayBusinesses(businesses) {
    const directory = document.getElementById("directory");

    businesses.forEach(biz => {
        const card = document.createElement("section");
        card.classList.add("card");

        const logo = document.createElement("img");
        logo.src = `images/${biz.image}`;
        logo.alt = `Logo of ${biz.name}`;
        logo.loading = "lazy";

        const name = document.createElement("h3");
        name.textContent = biz.name;

        const address = document.createElement("p");
        address.textContent = biz.address;

        const phone = document.createElement("p");
        phone.textContent = biz.phone;

        const website = document.createElement("a");
        website.href = biz.website;
        website.target = "_blank";
        website.textContent = "Visit Website";

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        directory.appendChild(card);
    });
}
