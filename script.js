document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navItems = document.querySelector(".nav-items ul");

    menuToggle.addEventListener("click", function () {
        navItems.classList.toggle("active");

        // If menu is active, make sure it's visible, else hide it
        if (navItems.classList.contains("active")) {
            navItems.style.display = "flex";
        } else {
            navItems.style.display = "none";
        }
    });

    // Close the menu when a link is clicked (for better UX)
    document.querySelectorAll(".nav-items a").forEach(link => {
        link.addEventListener("click", function () {
            navItems.classList.remove("active");
            navItems.style.display = "none";
        });
    });
});
