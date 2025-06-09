document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", () => {
    const lastVisit = localStorage.getItem("lastVisit");
    const currentDate = Date.now();
    let message;

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        message = daysSinceLastVisit < 1 ? "Back so soon! Awesome!" : `You last visited ${daysSinceLastVisit} day(s) ago.`;
    }

    localStorage.setItem("lastVisit", currentDate);
    document.querySelector(".visit-message").textContent = message;

    // Fetching JSON file
    fetch("data/discover-data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const cardsContainer = document.querySelector(".cards");
            data.places.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <h2>${item.name}</h2>
                    <figure>
                        <img src="${item.image}" alt="${item.name}">
                    </figure>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <button>Learn More</button>
                `;
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching the JSON data:", error));
});