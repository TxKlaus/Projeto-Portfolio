
  let openMenu = document.getElementById('open-menu')
  let menu = document.getElementById('mobile-menu')
  let overlay = document.getElementById('menuoverlay')

  openMenu.addEventListener('click', ()=>{
    menu.classList.add("abrir-Menu")
  })
  menu.addEventListener('click', ()=>{
    menu.classList.remove("abrir-Menu")
  })
  overlay.addEventListener('click', ()=>{
    menu.classList.remove("abrir-Menu")
  })








  /*const slider = document.querySelectorAll(".slider");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slider[currentSlide].classList.add('on')
}
function nextSlide(){
    hideSlider()
    if(currentSlide == slider.length -1){
        currentSlide = 0;
    }
    else {
        currentSlide ++;
    }
    
    showSlider()
}
function prevSlide(){
    hideSlider()
    if(currentSlide == 0){
        currentSlide = slider.length -1;
    }
    else {
        currentSlide --;
    }
    showSlider()
}
btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)
var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});*/
  