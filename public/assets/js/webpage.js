const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".navLinks")
const comment = document.querySelector(".caption")
const about = document.querySelector("#about-me")
const scroll = document.querySelector(".scrolling")

navLinks.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    comment.classList.toggle("seen");
    about.classList.toggle("hide");
});

scroll.addEventListener('click', () => {
    document.querySelector('#about-section').scrollIntoView({
        behavior: 'smooth'
    });
});