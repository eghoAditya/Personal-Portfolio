/*-- MIXITUP --*/
let mixerProjects = mixitup('.projects_container', {
    selectors: {
        target: '.project_item',
    },
    animation: {
        duration: 300,
    },
});

/*-- ACTIVE WORK --*/

const linkWork = document.querySelectorAll('.category_btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*--QUOTES SWIPER --*/
var quoteSwiper = new Swiper(".qoutes_container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });