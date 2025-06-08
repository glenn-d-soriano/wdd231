// Load items from JSON
fetch('data/places.json')
    .then(res => res.json())
    .then(data => {
        const gallery = document.querySelector('.gallery');
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
        <h2>${item.name
                }</h2>
        <figure>
          <img src="${item.image}" alt="${item.name}" width="300" height="200">
        </figure>
        <address>${item.address
                }</address>
        <p>${item.description
                }</p>
        <button>Learn More</button>
      `;
            gallery.appendChild(card);
        });
    });

// Handle visit message
const message = document.getElementById('visitor-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
    message.textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const diff = now - Number(lastVisit);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 1) {
        message.textContent = 'Back so soon! Awesome!';
    } else {
        message.textContent = `You last visited ${days
            } day${days === 1 ? '' : 's'
            } ago.`;
    }
}
localStorage.setItem('lastVisit', now);
