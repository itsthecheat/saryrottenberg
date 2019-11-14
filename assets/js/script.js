console.log('Hi it works!');

$('.box').on('touchstart', function() {});

// Page Scroll transition effect when clilcking menu item
$('.page-scroll').click(function() {
var sectionTo = $(this).attr('href');
$('html, body').animate({
 scrollTop: $(sectionTo).offset().top -80
}, 800);
});

// custom form routing
$("#menu").change(function(){
       var selection = $(this).children("option:selected").val();
      switch (selection) {
        case '1':
          $('form').attr('action', 'https://formspree.io/sary@rottenbergtherapy.com');
        break;
        case '2':
        $('form').attr('action', 'https://formspree.io/kate@rottenbergtherapy.com');
        break;
        default:
        $('form').attr('action', 'https://formspree.io/alana@rottenbergtherapy.com');
      }
   });

// material ripple efffect
const MDCRipple = mdc.ripple.MDCRipple;
const MDCRippleFoundation = mdc.ripple.MDCRippleFoundation;
const util = mdc.ripple.util;

(document.querySelectorAll('.my-ripple')).forEach((el) => mdc.ripple.MDCRipple.attachTo(el));
(document.querySelectorAll('button')).forEach((el) =>
mdc.ripple.MDCRipple.attachTo(el));

// material specialties menu
const buttonEl = document.querySelector('.mdc-button');
const menuEl = document.querySelector('.mdc-menu');
const menu = new mdc.menu.MDCMenu(menuEl);
buttonEl.addEventListener('click', (event) => {
  menu.open = !menu.open;
  menu.setAnchorCorner(mdc.menu.Corner.BOTTOM_LEFT);
  menu.setAnchorElement(buttonEl);
});
