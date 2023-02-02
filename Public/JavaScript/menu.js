let body = document.querySelector(".title-screen__title");
let head = document.querySelector(".header");

let intervalbox = setInterval(function() { body.getBoundingClientRect().bottom <=300 ? boxOn() : null}, 1000/60);

function boxOn() {
    head.setAttribute("style", "background-color: #08091c;");
    console.log("1");
}

let intervalboxoff = setInterval(function() { body.getBoundingClientRect().bottom >=300 ? boxOff() : null}, 1000/60);
function boxOff(){
    head.setAttribute("style", "background-color: none;");
    console.log("2");
}