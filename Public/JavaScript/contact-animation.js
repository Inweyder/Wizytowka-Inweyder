// Contact Page Animation

let boxContact = document.querySelector("#contact-page");

boxContact.firstElementChild.classList.remove("contact-page__box");
boxContact.firstElementChild.classList.add("contact-page__box--off");

let intervalContact = setInterval(function() { boxContact.getBoundingClientRect().top <=100 ? changeClassContact() : null}, 1000/60);

function changeClassContact() {
    boxContact.firstElementChild.classList.remove("contact-page__box--off");
    boxContact.firstElementChild.classList.add("contact-page__box");
    clearInterval(intervalContact);

}