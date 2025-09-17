const navBtn = document.getElementById("ham-btn");
const navSection = document.querySelector(".nav-section");

navBtn.addEventListener('click', () => { 
    navSection.classList.toggle('active');
});

document.addEventListener('click', (t) => {
    if (!navBtn.contains(t.target) && !navSection.contains(t.target)){
        navSection.classList.remove('active');
    }
});