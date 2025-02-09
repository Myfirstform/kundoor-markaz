document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navUl = document.querySelector("nav ul");


    menuToggle.addEventListener("click", function () {
        if (navUl.style.display === "none" || navUl.style.display === "") {
            navUl.style.display = "block";
        } else {
            navUl.style.display = "none";
        }
    });
});

