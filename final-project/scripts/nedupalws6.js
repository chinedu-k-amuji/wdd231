// Import functions from the module
import { fetchTeamMembers, setupModal, savePreferences, loadPreferences } from './utils.js';

// Display current year and last modified date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

// Fetch and display team members
fetchTeamMembers();

// Event listener for toggling navigation menu
document.getElementById("menu-toggle").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
});

// Contact form submission alert
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
});

// Load user preferences from local storage
loadPreferences();