document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector(".burger");

    burger.addEventListener('click', function() {
        var navBar = document.querySelector("nav");
        navBar.classList.toggle("active");
        
    });
});