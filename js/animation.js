const imgs = document.querySelectorAll(".pro3-desc img, .pro1-desc img");

if(imgs){
const observerImg = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            console.log("status", entry.isIntersecting);
            entry.target.classList.add("animation");
        }
    });

});

imgs.forEach(img => (observerImg.observe(img)));
} else {
    console.info("img not found");

}