function nightToggle() {
    var element = document.body;
    element.classList.toggle("darkmode");
  }

let animation = {
    revealDistance: 20,
    initalOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty:'all',
    transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll("revealable")

const reveal = () => {
    for (i = 0; i < revealableContainers.length ; ++i){
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
            revealableContainers[i].classList.add("active");
          } else {
            revealableContainers[i].classList.remove("active");
          }
    }
}

window.addEventListener('scroll', reveal());

/* get slides */

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

window.onload = showSlides(slideIndex);
