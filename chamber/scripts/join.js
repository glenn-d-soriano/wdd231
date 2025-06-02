document.addEventListener("DOMContentLoaded", () => {
    // 1. Set the hidden timestamp to current date/time (ISO format)
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }

    // 2. Modal dialog controls

    // Get all "Learn More" buttons inside membership cards
    const learnMoreButtons = document.querySelectorAll("#membership-levels button[aria-haspopup='dialog']");

    learnMoreButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const dialogId = button.getAttribute("aria-controls");
            const dialog = document.getElementById(dialogId);
            if (dialog) {
                dialog.showModal();
            }
        });
    });

    // Get all close buttons inside dialogs
    const closeButtons = document.querySelectorAll("dialog button");

    closeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const dialog = btn.closest("dialog");
            if (dialog) {
                dialog.close();
            }
        });
    });

    // Optional: Close dialog on click outside dialog content
    const dialogs = document.querySelectorAll("dialog");
    dialogs.forEach((dialog) => {
        dialog.addEventListener("click", (event) => {
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


function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split("&");
    for (const pair of pairs) {
        const [key, value] = pair.split("=");
        if (key) params[key] = decodeURIComponent(value || "");
    }
    return params;
}

const params = getQueryParams();

document.getElementById("fn").textContent = params.fn || "N/A";
document.getElementById("ln").textContent = params.ln || "N/A";
document.getElementById("email").textContent = params.email || "N/A";
document.getElementById("phone").textContent = params.phone || "N/A";
document.getElementById("company").textContent = params.company || "N/A";
document.getElementById("time").textContent = params.time || "N/A";