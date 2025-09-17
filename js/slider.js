const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");
const dotsGUI = document.querySelector(".dots");

let currentNow = 0;

slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showSlide(i));
    dotsGUI.appendChild(dot);
});

const dots = document.querySelectorAll(".dot")

function showSlide(index){
    if (index < 0){
        index = slides.length - 1;
    } else if (index >= slides.length){
        index = 0
    }

slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
});

currentNow = index;
}

nextBtn.addEventListener("click",() => {
    showSlide(currentNow + 1);
});

prevBtn.addEventListener("click",() =>{
    showSlide(currentNow - 1);
});

setInterval(() =>{
    showSlide(currentNow + 1);
}, 8000);