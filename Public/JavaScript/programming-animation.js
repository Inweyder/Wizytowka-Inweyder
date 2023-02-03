let boxProgramming = document.querySelector("#programming-languages");

boxProgramming.firstElementChild.classList.remove("programming-languages");
boxProgramming.firstElementChild.classList.add("programming-languages--off");

let intervalProgramming = setInterval(function() { boxProgramming.getBoundingClientRect().top <=200 ? changeClassProgramming() : null}, 1000/60);

function changeClassProgramming() {
    boxProgramming.firstElementChild.classList.remove("programming-languages--off");
    boxProgramming.firstElementChild.classList.add("programming-languages");
    clearInterval(intervalProgramming);

}
