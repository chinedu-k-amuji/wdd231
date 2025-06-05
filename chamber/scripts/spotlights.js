document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

const members = [
    { name: "Nedu Phone Accessories Ltd", logo: "images2/Nedupal-logo.jpg", phone: "234-806-025-4895", website: "https://chinedu-k-amuji.github.io/wdd131/project/index.html" },
    { name: "Global Enterprises", logo: "images2/airpod-pro.jpg", phone: "234-567-8901", website: "https://globalenterprises.com" },
    { name: "Innovative Tech Ltd", logo: "images2/fsudz-earpiece-girl.jpg", phone: "345-678-9012", website: "https://innovativetech.com" },
];

function displaySpotlights() {
    const container = document.getElementById('spotlight-container');
    container.innerHTML = '';

    const selectedMembers = members.sort(() => 0.5 - Math.random()).slice(0, 2);

    selectedMembers.forEach(member => {
        const memberCard = `
            <div class="spotlight-card">
                <img src="${member.logo}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>Phone: ${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `;
        container.innerHTML += memberCard;
    });
}

displaySpotlights();