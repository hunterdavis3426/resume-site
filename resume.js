document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    const label = document.getElementById("themeLabel");

    // Set initial state from localStorage if needed
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
        toggle.checked = true;
    }

    toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("darkMode", toggle.checked);
    });

    // Animate sections on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    document.querySelectorAll(".animate").forEach(section => {
        observer.observe(section);
    });
});
