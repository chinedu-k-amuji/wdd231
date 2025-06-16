// Fetch Team Members with Async/Await and Try/Catch Block
export async function fetchTeamMembers() {
    try {
        const response = await fetch('data/team-members.json');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const teamMembers = await response.json();
        const teamList = document.getElementById("team-list");

        if (teamList) {
            teamMembers.forEach(member => {
                const li = document.createElement("li");

                // Create image element
                const img = document.createElement("img");
                img.src = member.image;
                img.alt = `${member.name}'s photo`;
                img.style.width = "100px";
                img.style.height = "100px";
                img.style.borderRadius = "50%";

                // Create text content with template literals
                const text = document.createElement("p");
                text.innerHTML = `<strong>${member.name}</strong><br>${member.role}`;

                // Create button for opening modal
                const button = document.createElement("button");
                button.textContent = "More Info";
                button.addEventListener("click", () => setupModal(member));

                // Append elements
                li.appendChild(img);
                li.appendChild(text);
                li.appendChild(button);
                teamList.appendChild(li);
            });
        }
    } catch (error) {
        console.error("Error fetching team members:", error);
    }
}

// Setup Modal Dialog for detailed info
export function setupModal(member) {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");

    modalContent.innerHTML = `
        <h2>${member.name}</h2>
        <p><strong>Role:</strong> ${member.role}</p>
        <p><strong>Bio:</strong> ${member.bio}</p>
        <button id="close-modal">Close</button>
    `;

    modal.style.display = "block";

    // Close modal event listener
    document.getElementById("close-modal").addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Save user preferences in local storage
export function savePreferences() {
    const darkMode = document.getElementById("dark-mode-toggle").checked;
    localStorage.setItem("darkMode", darkMode);
}

// Load user preferences from local storage
export function loadPreferences() {
    const darkMode = localStorage.getItem("darkMode") === "true";
    document.getElementById("dark-mode-toggle").checked = darkMode;
    document.body.classList.toggle("dark-mode", darkMode);
}