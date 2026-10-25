// Select the toggle button
const toggleBtn = document.getElementById("theme-toggle");

// Listen for button clicks
toggleBtn.addEventListener("click", function() {

    // Add or remove dark-mode class
    document.body.classList.toggle("dark-mode");

    // Check whether dark mode is active
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }

});