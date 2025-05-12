document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.createElement("button");
    navToggle.textContent = "☰";
    document.querySelector("nav").prepend(navToggle);

    navToggle.addEventListener("click", function() {
        document.querySelector("nav ul").classList.toggle("open");
    });
});