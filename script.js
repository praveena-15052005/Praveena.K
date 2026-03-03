function toggleMenu(){
    const menu = document.getElementById("sideMenu");
    menu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
}

const slides = document.querySelectorAll(".slide-left, .slide-right, .slide-up");

function revealSlide(){
    slides.forEach(slide => {
        const rect = slide.getBoundingClientRect();

        // If element is inside viewport
        if(rect.top < window.innerHeight && rect.bottom > 0){
            slide.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSlide);
window.addEventListener("load", revealSlide);