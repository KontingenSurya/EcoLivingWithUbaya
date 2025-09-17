function startCount(el, start = 0, end = 10, duration = 1000){
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration/range));
    let current = start;
    let timer = setInterval(() => {
       current++;
       el.textContent = current;
       if (current >= end){
        clearInterval(timer);
       } 
    }, stepTime);
}

const counterEL = document.getElementById("count");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            startCount(counterEL, 0, 10, 2000);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5});

observer.observe(counterEL);