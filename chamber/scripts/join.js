document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", function () {
    // Membership Cards Animation (Initial Load)
    const cards = document.querySelectorAll(".membership-cards .card");
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 300 * index);
    });

    // Modal Handling for Membership Levels
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");
    
    function openModal(modalId) {
        document.getElementById(modalId).style.display = "flex";
        document.getElementById(modalId).setAttribute("aria-hidden", "false");
        document.getElementById(modalId).focus();
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
        document.getElementById(modalId).setAttribute("aria-hidden", "true");
    }

    // Closing modals via buttons
    closeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const modalId = this.parentElement.parentElement.id;
            closeModal(modalId);
        });
    });

    // Closing modals via ESC key for accessibility
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modals.forEach((modal) => {
                if (modal.style.display === "flex") {
                    closeModal(modal.id);
                }
            });
        }
    });
});