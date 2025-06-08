fetch('data/places.json')
    .then(res => res.json())
    .then(data => {
        const gallery = document.querySelector('.gallery');

        data.forEach((item, index) => {
            if (item.name && item.image && item.address && item.description) {
                const card = document.createElement('div');
                card.className = 'card';
                // Use a unique ID for the dialog
                const dialogId = `dialog-${index}`;

                card.innerHTML = `
          <h2>${item.name}</h2>
          <figure>
            <img src="${item.image}" alt="${item.name}" width="300" height="200" loading="lazy">
          </figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button aria-haspopup="dialog" aria-controls="${dialogId}">Learn More</button>

          <dialog id="${dialogId}" aria-labelledby="dialog-title-${index}" aria-modal="true">
            <h3 id="dialog-title-${index}">${item.name}</h3>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button class="close-dialog">Close</button>
          </dialog>
        `;

                gallery.appendChild(card);
            }
        });

        // After cards/dialogs are created, add event listeners:

        // Open dialogs
        gallery.querySelectorAll('button[aria-haspopup="dialog"]').forEach(button => {
            button.addEventListener('click', () => {
                const dialogId = button.getAttribute('aria-controls');
                const dialog = document.getElementById(dialogId);
                if (dialog) {
                    dialog.showModal();
                }
            });
        });

        // Close dialogs
        gallery.querySelectorAll('dialog button.close-dialog').forEach(button => {
            button.addEventListener('click', () => {
                const dialog = button.closest('dialog');
                if (dialog) {
                    dialog.close();
                }
            });
        });

        // Optional: close dialog on click outside content
        gallery.querySelectorAll('dialog').forEach(dialog => {
            dialog.addEventListener('click', (event) => {
                const rect = dialog.getBoundingClientRect();
                if (
                    event.clientX < rect.left ||
                    event.clientX > rect.right ||
                    event.clientY < rect.top ||
                    event.clientY > rect.bottom
                ) {
                    dialog.close();
                }
            });
        });

    });
