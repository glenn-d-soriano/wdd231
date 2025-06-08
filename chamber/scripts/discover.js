// Load items from JSON
fetch('data/places.json')
    .then(res => res.json())
    .then(data => {
        const gallery = document.querySelector('.gallery');
        data.forEach(item => {
            if (item.name && item.image && item.address && item.description) {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h2>${item.name}</h2>
                    <figure>
                        <img src="${item.image}" alt="${item.name}" width="300" height="200" loading="lazy">
                    </figure>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <button>Learn More</button>
                `;
                gallery.appendChild(card);
            }
        });
    });

// Handle visit message
const message = document.getElementById('visitor-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
    message.textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
    if (days < 1) {
        message.textContent = 'Back so soon! Awesome!';
    } else {
        const dayText = days === 1 ? 'day' : 'days';
        message.textContent = `You last visited ${days} ${dayText} ago.`;
    }
}

localStorage.setItem('lastVisit', now);
