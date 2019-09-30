console.log('\'Allo \'Allo!');

$('.box').on('touchstart', function() {});
// Page Scroll transition effect when clilcking menu item
$('.page-scroll').click(function() {
var sectionTo = $(this).attr('href');
$('html, body').animate({
 scrollTop: $(sectionTo).offset().top
}, 800);
});
