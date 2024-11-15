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
  
/*-- CONTACT FORM--*/
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  Message = document.getElementById('message'),
  contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  //cheching if the field has a value
  if (
    contactName.value == '' ||
    contactEmail.value == '' ||
    Message.value == ''
  ){
    // add and remove color
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');

    // show message
    contactMessage.textContent = 'Write all the input fields'; 
  } else {
    // serviceID - templateID - #form - publickey
    emailjs
      .sendForm(
      'service_j6fyeo8',
      'template_ys0sgir',
      '#contact-form',
      'kYEWVBteDC6g7JQ20'
    )
      .then(() => {
        //show message and add colour
        contactMessage.classList.add('color-light');
        console.log(contactMessage);
        contactMessage.textContent = 'Message sent ✔';

        //remove message after 5 secs
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
      });
  }
};
contactForm.addEventListener('submit', sendEmail);