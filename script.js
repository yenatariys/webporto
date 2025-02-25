document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Portofolio Siap!");

    // Menu Toggle (Pastikan elemen ada sebelum akses)
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }

    // Dark Mode Toggle (Pastikan elemen ada sebelum akses)
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }
});
