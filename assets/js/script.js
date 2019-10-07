console.log('Hi it works!');

$('.box').on('touchstart', function() {});
// Page Scroll transition effect when clilcking menu item
$('.page-scroll').click(function() {
var sectionTo = $(this).attr('href');
$('html, body').animate({
 scrollTop: $(sectionTo).offset().top
}, 800);
});

const MDCRipple = mdc.ripple.MDCRipple;
const MDCRippleFoundation = mdc.ripple.MDCRippleFoundation;
const util = mdc.ripple.util;

const surface = document.querySelector('.my-ripple');
const ripple = new MDCRipple(surface);
