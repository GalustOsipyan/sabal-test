/*Eye icon toggle*/
const eyeIconLogin = document.querySelector('#eye-icon-login');
const eyeIconReg = document.querySelector('#eye-icon-registration');
const passwordInputLogin = document.querySelector('#login-password');
const passwordInputReg = document.querySelector('#registration-password');

try {
   eyeIconLogin.addEventListener('click', () => toggleImage(eyeIconLogin, passwordInputLogin));
   eyeIconReg.addEventListener('click', () => toggleImage(eyeIconReg, passwordInputReg));
} catch (e) {
   //...
}


function toggleImage(eyeIcon, input) {
   if (!eyeIcon.classList.contains('eye-open')) {
      eyeIcon.classList.add('eye-open');
      eyeIcon.src = 'assets/icons/eye-opened.png';
      input.type = 'text';
   } else {
      eyeIcon.classList.remove('eye-open');
      eyeIcon.src = 'assets/icons/eye-closed.png';
      input.type = 'password';
   }
}

/*Eye icon toggle*

/*Owl carousel init*/
$(function () {
   $('.owl-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      margin: 10,
      nav: true,
      dots: false,
      // items: 4,
      /*
            responsive: {
               0: {
                  items: 1
               },
               600: {
                  items: 3
               },
               1000: {
                  items: 4
               }
            }
      */
   });
});
/*Owl carousel init*/