// navbar hamburger
const navMenu = document.querySelector('#navMenu');

// const nabToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
// const socialIcons = document.querySelector(".social-icons");

navMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    links.classList.toggle('show-links');
});

//classList = show/gets all classes
//contains - checks classList for specific class
//add - add class
//remove - remove class
// toggle - toggle class


// nabToggle.addEventListener("click", () => {
//     // links.classList.contains('show-links') ? list.classList.remove("show-links") : list.classList.add("show-links");
//     links.classList.toggle('show-links');
// })