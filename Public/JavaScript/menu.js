let body = document.querySelector(".title-screen__title");
let box = document.querySelector(".header");

let intervalbox = setInterval(function() { body.getBoundingClientRect().bottom <=300 ? boxOn() : null}, 1000/60);

function boxOn() {
    box.setAttribute("style", "background-color: #08091c;");
    console.log("1");
}

let intervalboxoff = setInterval(function() { body.getBoundingClientRect().bottom >=300 ? boxOff() : null}, 1000/60);
function boxOff(){
    box.setAttribute("style", "background-color: none;");
    console.log("2");
}