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

        // Event delegation for Learn More buttons
        gallery.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const card = e.target.closest('.card');
                const placeName = card.querySelector('h2').textContent;
                const address = card.querySelector('address').textContent;
                const description = card.querySelector('p').textContent;

                alert(`Learn more about ${placeName}\n\nAddress: ${address}\n\nDescription: ${description}`);
            }
        });
    });

// Handle visit message (can be outside fetch block)
const message = document.getElementById('visitor-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
    message.textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
    const dayText = days === 1 ? 'day' : 'days';
    message.textContent = days < 1 ? 'Back so soon! Awesome!' : `You last visited ${days} ${dayText} ago.`;
}

localStorage.setItem('lastVisit', now);
