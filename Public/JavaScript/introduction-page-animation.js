
// Introduction Page Animation

let box = document.querySelector("#introduction-page");

box.firstElementChild.classList.remove("introduction-page__box");
box.firstElementChild.classList.add("introduction-page__box--off");

let interval = setInterval(function() { box.getBoundingClientRect().top <=100 ? changeClass() : null}, 1000/60);

function changeClass() {
    box.firstElementChild.classList.remove("introduction-page__box--off");
    box.firstElementChild.classList.add("introduction-page__box");
    clearInterval(interval);

}



