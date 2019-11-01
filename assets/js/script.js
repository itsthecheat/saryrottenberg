console.log('Hi it works!');

$('.box').on('touchstart', function() {});
// Page Scroll transition effect when clilcking menu item
$('.page-scroll').click(function() {
var sectionTo = $(this).attr('href');
$('html, body').animate({
 scrollTop: $(sectionTo).offset().top -80
}, 800);
});

const MDCRipple = mdc.ripple.MDCRipple;
const MDCRippleFoundation = mdc.ripple.MDCRippleFoundation;
const util = mdc.ripple.util;

(document.querySelectorAll('.my-ripple')).forEach((el) => mdc.ripple.MDCRipple.attachTo(el));
(document.querySelectorAll('button')).forEach((el) =>
mdc.ripple.MDCRipple.attachTo(el));
const buttonEl = document.querySelector('.mdc-button');
const menuEl = document.querySelector('.mdc-menu');
const menu = new mdc.menu.MDCMenu(menuEl);
buttonEl.addEventListener('click', (event) => {
  menu.open = !menu.open;
  menu.setAnchorCorner(mdc.menu.Corner.BOTTOM_LEFT);
  menu.setAnchorElement(buttonEl);
});

// new MDCRipple.attachTo(document.querySelector('.my-ripple-button'));
// const surface = document.querySelector('.my-ripple');
// const ripple = new MDCRipple(surface);
