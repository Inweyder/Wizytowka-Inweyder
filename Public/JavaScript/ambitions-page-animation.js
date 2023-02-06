// Ambitions Page Animation

let boxAmbitions = document.querySelector("#ambitions-page");

boxAmbitions.firstElementChild.classList.remove("ambitions-page__box");
boxAmbitions.firstElementChild.classList.add("ambitions-page__box--off");

let intervalAmbitions = setInterval(function() { boxAmbitions.getBoundingClientRect().top <=100 ? changeClassAmbitions() : null}, 1000/60);

function changeClassAmbitions() {
    boxAmbitions.firstElementChild.classList.remove("ambitions-page__box--off");
    boxAmbitions.firstElementChild.classList.add("ambitions-page__box");
    clearInterval(intervalAmbitions);

}




