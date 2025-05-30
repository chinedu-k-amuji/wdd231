document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

async function fetchMembers() {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const memberContainer = document.getElementById("members");
    memberContainer.innerHTML = "";
    
    members.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("member-card");

        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>📞 ${member.phone}</p>
            <a href="${member.website}" target="_blank">Website</a>
            <p class="membership ${getMembershipClass(member.membership)}">
                Membership: ${getMembershipType(member.membership)}
            </p>
        `;

        memberContainer.appendChild(memberCard);
    });
}

// Membership Levels
function getMembershipType(level) {
    if (level === 3) return "Gold Member 🥇";
    if (level === 2) return "Silver Member 🥈";
    return "Member 🏆";
}

function getMembershipClass(level) {
    if (level === 3) return "gold";
    if (level === 2) return "silver";
    return "regular";
}

// Toggle Grid & List View
document.getElementById("gridView").addEventListener("click", () => {
    document.getElementById("members").classList.remove("list");
    document.getElementById("members").classList.add("grid");
});

document.getElementById("listView").addEventListener("click", () => {
    document.getElementById("members").classList.remove("grid");
    document.getElementById("members").classList.add("list");
});

// Fetch members initially
fetchMembers();