document.addEventListener("DOMContentLoaded", () => {
    // Select all dropdowns
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const toggleButton = dropdown.querySelector(".dropdown-toggle");
        const menu = dropdown.querySelector(".dropdown-menu");

        // Function to toggle the dropdown menu
        const toggleMenu = () => {
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        };

        // Function to close the menu if clicked outside
        const closeMenu = (event) => {
            if (!dropdown.contains(event.target)) {
                menu.style.display = "none";
            }
        };

        // Add event listeners
        toggleButton.addEventListener("click", toggleMenu);
        document.addEventListener("click", closeMenu);
    });
});
